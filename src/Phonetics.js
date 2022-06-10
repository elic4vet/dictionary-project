import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetic(props) {
  if (props.phonetic && props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <div className="row">
          <div className="col">
            <ReactAudioPlayer src={props.phonetic.audio} controls />
          </div>
          <div className="row Phonetic-text">{props.phonetic.text}</div>
        </div>
      </div>
    );
  }
  return null;
}
