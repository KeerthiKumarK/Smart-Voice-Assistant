import React, { useState } from "react";
import Header from "./components/Header";
import TranscriptionBox from "./components/TranscriptionBox";
import ActionsBox from "./components/ActionsBox";
import ToDoBox from "./components/ToDoBox";
import DatesBox from "./components/DatesBox";
import Buttons from "./components/Buttons";
import "./styles.css";
import moment from "moment"; // Import moment for date formatting

const App = () => {
  const [transcription, setTranscription] = useState("");
  const [actions, setActions] = useState("");
  const [todo, setTodo] = useState("");
  const [dates, setDates] = useState("");

  const extractActions = (text) => {
    return (text.match(/\b(meeting|task|deadline|reminder)\b.*/gi) || []).join("\n");
  };

  const generateToDo = (actions) => {
    return actions.split("\n").map((action) => `- ${action}`).join("\n");
  };

  const extractDates = (text) => {
    return (text.match(/(\b\w+ \d{1,2}(, \d{4})?\b|\d{1,2}\/\d{1,2}\/\d{2,4})/gi) || []).join("\n");
  };

  // Define addToCalendar function
  const addToCalendar = (dates) => {
    if (!dates) return alert("No dates found!");
    const formattedDate = moment(dates, ["MMMM D, YYYY", "M/D/YYYY", "MMMM D"]).format("YYYYMMDD");
    const eventLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting&dates=${formattedDate}T100000Z/${formattedDate}T110000Z`;
    window.open(eventLink, "_blank");
  };

  // Define sendEmail function
  const sendEmail = (transcription) => {
    const mailLink = `mailto:?subject=Meeting Notes&body=${encodeURIComponent(transcription)}`;
    window.open(mailLink, "_blank");
  };

  return (
    <div className="App">
      <Header />
      <Buttons
        transcription={transcription}
        dates={dates}
        setTranscription={setTranscription}
        addToCalendar={addToCalendar} // Pass addToCalendar
        sendEmail={sendEmail} // Pass sendEmail
/>
      <div className="container">
        <TranscriptionBox
          transcription={transcription}
          setTranscription={setTranscription}
        />
        <ActionsBox
          actions={actions}
          setActions={setActions}
          transcription={transcription}
          extractActions={extractActions}
        />
        <ToDoBox
          todo={todo}
          setTodo={setTodo}
          actions={actions}
          generateToDo={generateToDo}
        />
        <DatesBox
          dates={dates}
          setDates={setDates}
          transcription={transcription}
          extractDates={extractDates}
        />
      </div>
      <div className="bottom-buttons">
        <button onClick={() => addToCalendar(dates)}>📆 Add to Calendar</button>
        <button onClick={() => sendEmail(transcription)}>📨 Share via Email</button>
      </div>
    </div>
  );
};

export default App;