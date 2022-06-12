import React from "react";
import uiExamleColor from "./images/uiExampleColor.jpg";
import uiExamplegray from "./images/uiExamplegray.jpg";

export default function UiChangeExample(props) {
  if (props.uiSetting === "bland") {
    return (
      <div className="featureExample">
        <img src={uiExamplegray} alt="grayscale image of paint" />
        <p>Since you entered no we have modified the your user interface.</p>
      </div>
    );
  } else {
    return (
      <div className="featureExample">
        <img src={uiExamleColor} alt="image of paint" />
        <p>Thanks for playing we will see you next time.</p>
      </div>
    );
  }
}
