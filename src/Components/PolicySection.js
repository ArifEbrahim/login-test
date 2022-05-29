import React from 'react'

export default function PolicySection(props) {
  const { label, text } = props;

  return (
    <div>
      <div>{label}</div>
      <div>{text}</div>
    </div>
  )
}
