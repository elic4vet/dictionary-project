import React from "react";

export default function Synonyms(props) {
  if (props.Synonyms) {
    return props.Synonyms;
  } else {
    return null;
  }
}
