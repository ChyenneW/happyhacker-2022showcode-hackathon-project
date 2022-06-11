import React from "react";
import uiExamleColor from "./images/uiExampleColor.jpg";
import uiExamplegray from "./images/uiExamplegray.jpg";

export default function UiChangeExample(props) {
  if (props.uiSetting === "bland") {
    return (
      <div className="featureExample">
        <img src={uiExamplegray} alt="grayscale image of paint" />
      </div>
    );
  } else {
    return (
      <div>
        <img src={uiExamleColor} alt="image of paint" />
      </div>
    );
  }
}
