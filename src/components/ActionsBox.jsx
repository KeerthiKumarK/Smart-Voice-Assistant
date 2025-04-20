import React from "react";

const ActionsBox = ({ actions, setActions, transcription, extractActions }) => {
  return (
    <div className="box">
      <h2>Extracted </h2>
      <textarea
        id="actions"
        placeholder="Extracted actions will appear here..."
        value={actions}
        onChange={(e) => setActions(e.target.value)}
      />
      <button onClick={() => setActions(extractActions(transcription))}>
        📌 Extract Actions
      </button>
    </div>
  );
};

export default ActionsBox;