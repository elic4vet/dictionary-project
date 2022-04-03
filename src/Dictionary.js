import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, SetKeyword] = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    SetKeyword(event.target.value);
  }

  return (
    <div className="Dictionnary">
      <form onSubmit={search}>
        <input type="Search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
