import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Dictionary.css";
import "./Results.css";

export default function Result(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2> {props.results.word}</h2>

          {props.results.phonetics
            .filter(function (phonetic) {
              return phonetic.audio;
            })
            .map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetics phonetic={phonetic} />
                </div>
              );
            })}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
