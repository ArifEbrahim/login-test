import React from "react";

export default function Input(props) {
  const {onChange, label, value, id} = props;

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        data-testid={`${id}-input`}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </>
  );
}
