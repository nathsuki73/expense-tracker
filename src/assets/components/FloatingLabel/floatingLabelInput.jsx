import React, { useState } from "react";
import "./floatingLabelInput.css";

const FloatingLabelInput = ({ label, type, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`floating-label-input ${isFocused || value ? "focused" : ""}`}
    >
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default FloatingLabelInput;
