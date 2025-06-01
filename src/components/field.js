import React, { useState } from "react";
import "../styles.scss";
function Field({ value, onChange }) {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFindClick = () => {
    onChange(inputValue);
  };
  const handleClearClick = () => {
    onChange("");
    setInputValue("");
  };

  return (
    <div className="field">
      <h1>Translate & Transliterate</h1>
      <label>Enter English</label>
      <div className="input-container">
        <input
          className="input"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="buttons">
          <button className="find" onClick={handleFindClick}>
            Find
          </button>
          <button className="clear" onClick={handleClearClick}>
            clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Field;
