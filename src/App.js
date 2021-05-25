import React, { useState } from "react";
import "./styles.css";

var userName = "sam";
var textColor = "green";

const emojiLibrary = {
  "👶": "baby",
  "👧": "girl",
  "👦": "boy",
  "👨‍🦱": "man",
  "👩": "woman",
  "👵": "grandma",
  "👴": "grandpa"
};

const emojis = Object.keys(emojiLibrary);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function handleUserInput(event) {
    if (event.target.value in emojiLibrary) {
      setEmojiMeaning(emojiLibrary[event.target.value]);
      console.log(event.target.value);
    } else {
      setEmojiMeaning("Emoji not present in our library :(");
    }
  }

  function emojiClickHandler(emoji) {
    console.log(emoji);
    if (emoji in emojiLibrary) {
      console.log(emojiLibrary[emoji]);
      setEmojiMeaning(emojiLibrary[emoji]);
    } else {
      setEmojiMeaning("We don't have the meaning at the moment");
    }
  }

  return (
    <div className="App">
      <h1>emojipedia</h1>
      <small>
        welcome to emojiepedia{" "}
        <span style={{ color: textColor }}>{userName}</span>
      </small>
      <br />
      <input onChange={handleUserInput} />
      <br />
      {emojiMeaning}
      <ul>
        {emojis.map((item) => (
          <li key={item} onClick={() => emojiClickHandler(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
