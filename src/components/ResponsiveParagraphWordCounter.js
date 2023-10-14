import React, { useState } from "react";
import "../App.css";

const ResponsiveParagraphWordCounter = () => {
  const [wordCount, setWordCount] = useState(0);
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    const words = newText.split(/\s+/).filter((word) => word !== "");
    setWordCount(words.length);
  };

  return (
    <div className="container">
      <textarea
        placeholder="Type your text here..."
        value={text}
        onChange={handleInputChange}
      />
      <p>Word count: {wordCount}</p>
    </div>
  );
};

export default ResponsiveParagraphWordCounter;

