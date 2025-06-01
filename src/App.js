import "./styles.scss";
import React, { useState } from "react";
import Field from "./components/field";
import Translate from "./components/translate";
import Languages from "./components/languages";
import Globe from "./components/globe";
import { Particles } from "./components/particles";

export default function App() {
  const [language, setLanguage] = useState("ta");
  const [text, setText] = useState("");

  return (
    <div className="app-container">
      <Particles
        className="particles-container"
        quantity={400}
        color="#ffffff"
      />
      <div className="wrapper">
        <div className="globe-bg">
          <Globe />
        </div>
        <div className="main-content">
          <Field onChange={setText} />
          <Languages language={language} onLanguageChange={setLanguage} />
          <Translate text={text} language={language} />
        </div>
      </div>
    </div>
  );
}
