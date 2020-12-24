import React from "react";

import EyeSVG from "../svgs/eyes.svg";

const Quote = () => {
  return (
    <div className="quote-anime-container">
      <img src={EyeSVG} alt="two eys" className="anime" />
      <div>
        <span>
          “look through the eyes of Dhamma, enlightment itself will come to you”
        </span>
      </div>
      <span className="quote-teller"> -- Lord Buddha -- </span>
      <div className="gallery-button-container">
        <a href="/">
          <button type="submit" className="gallery-button">
            View the Gallery
          </button>
        </a>
      </div>
    </div>
  );
};

export default Quote;
