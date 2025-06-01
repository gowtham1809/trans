import React, { useEffect, useState } from "react";
import axios from "axios";
import { transliterate as tr } from "transliteration";
import "../styles.scss";

const useTranslation = (text, language) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    if (!text || !language) {
      setTranslated(text);
      return;
    }

    const cancelToken = axios.CancelToken.source();

    const doTranslation = async () => {
      try {
        const translatedText = await translateText(text, language);
        setTranslated(translatedText);
      } catch (error) {
        console.error("Translation failed:", error.message);
        setTranslated("Translation error");
      }
    };

    doTranslation();

    return () => {
      cancelToken.cancel();
    };
  }, [text, language]);

  return translated;
};

const translateText = async (text, targetLang) => {
  const { data } = await axios.get("https://api.mymemory.translated.net/get", {
    params: {
      q: text,
      langpair: `en|${targetLang}`,
    },
  });

  return data.responseData.translatedText;
};

function Translate({ language, text }) {
  const translated = useTranslation(text, language);
  const [transliterated, setTransliterated] = useState("");

  useEffect(() => {
    if (translated) {
      try {
        const transliteratedText = tr(translated);
        setTransliterated(transliteratedText);
      } catch (error) {
        console.error("Transliteration Error:", error);
        setTransliterated("Error transliterating");
      }
    }
  }, [translated]);

  return (
    <div className="translate">
      <label className="label">Translated Text</label>
      <h1 className="title">{translated.replace(/&#39;/g, "'")}</h1>

      <label className="label">Transliterated Text</label>
      <h1 className="title">{transliterated.replace(/&#39;/g, "'")}</h1>
    </div>
  );
}

export default Translate;
