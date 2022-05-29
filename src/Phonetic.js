import React from "react";
import "./Phonetics.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href="{props.phonetic.audio}" target="_blank">
        Listen <br />
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
