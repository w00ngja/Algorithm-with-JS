import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Video() {
  const Navigate = useNavigate();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    Navigate(`/videos/${text}`);
  };
  return (
    <div>
      Video
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="비디오 아이디 입력" onChange={handleChange} value={text}></input>
      </form>
    </div>
  );
}
