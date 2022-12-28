import React from "react";
import "./Switch.css";

function Switch({ isOn, handleToggle, onColor }) {
  return (
    <label
      style={{ backgroundColor: isOn && onColor }}
      className="react-switch-label"
      htmlFor="react-switch-new"
    >
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id="react-switch-new"
        type="checkbox"
      />

      <span className="react-switch-button" />
    </label>
  );
}

export default Switch;
