import React, { useState } from "react";
import { colors } from "./colors";
import "./GoogleSheet.css";

const GoogleSheet = () => {
  // State for cell colors and last clicked cell index
  const [cellColors, setCellColors] = useState(
    Array.from({ length: 500 }, () => ({
      backgroundColor: "",
      textColor: "",
      fontStyle: "",
    }))
  );
  const [lastClickedCellIndex, setLastClickedCellIndex] = useState(null);

  // Function to handle cell click
  const handleCellClick = (index) => {
    setLastClickedCellIndex(index);
  };

  // Function to handle color button click
  const handleColorButtonClick = (color, type) => {
    if (lastClickedCellIndex !== null) {
      const updatedCellColors = [...cellColors];
      updatedCellColors[lastClickedCellIndex][type] = color;
      setCellColors(updatedCellColors);
    }
  };

  // Function to handle font style button click
  const handleFontStyle = (style) => {
    const updatedCellColors = [...cellColors];
    const currentStyle = updatedCellColors[lastClickedCellIndex].fontStyle;

    // Toggle style on/off
    updatedCellColors[lastClickedCellIndex].fontStyle =
      currentStyle === style ? "" : style;

    setCellColors(updatedCellColors);
  };

  return (
    <div>
      {/* Container for background color buttons */}
      <div className="colors__container">
        <span>Bg Color</span>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => handleColorButtonClick(color, "backgroundColor")}
            className="color"
            style={{ backgroundColor: color }}
          ></button>
        ))}
      </div>

      {/* Container for text color buttons */}
      <div className="colors__container">
        <span>Text Color</span>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => handleColorButtonClick(color, "textColor")}
            className="color"
            style={{ backgroundColor: color, color: "white" }}
          ></button>
        ))}
      </div>

      {/* Container for text styles buttons */}
      <div className="text-styles">
        <button
          style={{ fontStyle: "italic" }}
          onClick={() => handleFontStyle("italic")}
        >
          I
        </button>
        <button
          style={{ fontWeight: "bold" }}
          onClick={() => handleFontStyle("bold")}
        >
          B
        </button>
        <button onClick={() => handleFontStyle("underline")}>U</button>
        <button onClick={() => handleFontStyle("left")}>Left</button>
        <button onClick={() => handleFontStyle("center")}>Center</button>
        <button onClick={() => handleFontStyle("right")}>Right</button>
      </div>

      {/* Container for cells grid */}
      <div className="cells__grid">
        {cellColors.map((_, index) => (
          <div
            key={index}
            onClick={() => handleCellClick(index)}
            className="inptfield-parent"
            style={{ backgroundColor: cellColors[index].backgroundColor }}
          >
            <input
              type="text"
              className="inputfield__cell"
              style={{
                color: cellColors[index].textColor,
                fontStyle: cellColors[index].fontStyle, // Apply font style
                fontWeight: cellColors[index].fontStyle, // Apply bold weight
                textDecoration: cellColors[index].fontStyle, // Apply underline
                textAlign: cellColors[index].fontStyle, // Apply text alignment
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleSheet;
