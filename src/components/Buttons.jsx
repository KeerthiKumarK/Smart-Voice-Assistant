import React, { useState, useRef } from "react";

const Buttons = ({ transcription, dates, setTranscription, addToCalendar, sendEmail }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [status, setStatus] = useState("Processing Status: Idle");
  const recognitionRef = useRef(null); // 🔹 Store recognition instance

  const startRecording = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    recognitionRef.current = recognition; // 🔹 Store instance in ref
    setIsRecording(true);
    setStatus("🎙 Recording...");

    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript + " ";
      }
      setTranscription(transcript.trim());
    };

    recognition.start();
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
      setStatus("🛑 Processing...");
      setTimeout(() => setStatus("✅ Idle"), 1000);
    }
  };

  return (
    <div>
      <button onClick={startRecording} disabled={isRecording}>
        🎙 Start Recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        🛑 Stop Recording
      </button>
      <p id="status">{status}</p>
    </div>
  );
};

export default Buttons;
