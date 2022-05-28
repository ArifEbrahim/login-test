import React from "react";

export default function Button(props) {
  const { onClick, text } = props;

  return (
    <button className="btn" type="button" onClick={onClick}>
      <span className="btn-text">{text}</span>
    </button>
  );
}
