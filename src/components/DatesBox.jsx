import React from "react";

const DatesBox = ({ dates, setDates, transcription, extractDates }) => {
  return (
    <div className="box">
      <h2>Extracted Dates</h2>
      <textarea
        id="dates"
        placeholder="Extracted dates will appear here..."
        value={dates}
        onChange={(e) => setDates(e.target.value)}
      />
      <button onClick={() => setDates(extractDates(transcription))}>
        📅 Extract 
      </button>
    </div>
  );
};

export default DatesBox;