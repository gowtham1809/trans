import React from "react";
import "../styles.scss";

function Languages({ language, onLanguageChange }) {
  return (
    <div>
      <label className="label">Select Language</label>
      <div className="opts">
        {LANGUAGES.map(({ label, value }) => {
          return (
            <div
              key={label}
              className={`opt ${language === value ? "selected" : ""}`}
              onClick={() => onLanguageChange(value)}
            >
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const LANGUAGES = [
  { label: "Assamese", value: "as" },
  { label: "Bengali", value: "bn" },
  { label: "Gujarati", value: "gu" },
  { label: "Hindi", value: "hi" },
  { label: "Kannada", value: "kn" },
  { label: "Kashmiri", value: "ks" },
  { label: "Malayalam", value: "ml" },
  { label: "Manipuri (Meitei)", value: "mni" },
  { label: "Marathi", value: "mr" },
  { label: "Nepali", value: "ne" },
  { label: "Odia (Oriya)", value: "or" },
  { label: "Punjabi", value: "pa" },
  { label: "Sanskrit", value: "sa" },
  { label: "Santali", value: "sat" },
  { label: "Sindhi", value: "sd" },
  { label: "Tamil", value: "ta" }, // "ta-IN" is less common; "ta" is standard
  { label: "Telugu", value: "te" },
  { label: "Urdu", value: "ur" },
];

export default Languages;
