import React from "react";

const TranscriptionBox = ({ transcription, setTranscription }) => {
  return (
    <div className="box">
      <h2>Transcription</h2>
      <textarea
        id="transcription"
        placeholder="Transcribed text will appear here..."
        value={transcription}
        onChange={(e) => setTranscription(e.target.value)}
      />
    </div>
  );
};

export default TranscriptionBox;