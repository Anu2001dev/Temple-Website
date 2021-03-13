import React from "react";
import EyeSVG from "../svgs/eyes.svg";

const Quote = () => {
  return (
    <div>
      <div className="quote-anime-container">
        <div className="svg">
          <img src={EyeSVG} alt="two eyes" className="anime" />
        </div>
        <div className="quote">
          <span>
            “look through the eyes of Dhamma, enlightment itself will come to
            you”
          </span>
          <span className="quote-teller"> -- Lord Buddha -- </span>
          <div className="gallery-button-container">
            <a href="/">
              <button type="submit" className="gallery-button">
                View the Gallery
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
