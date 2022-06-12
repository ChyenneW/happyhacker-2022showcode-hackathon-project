import React, { useState } from "react";
import UiChangeExample from "./UiChangeExample";
import interfaceChange from "./images/interfaceChange.png";
import uiDemo from "./images/uiDemo.mp4";
import uiDemoW from "./images/uiDemo.webm";

export default function UiChange() {
  let [uiSetting, setUi] = useState("color");

  function triggerAlert(event) {
    event.preventDefault();
    let gamerAnswer = prompt(
      "You have been playing for an hour. Would you like to keep playing?"
    );

    if (gamerAnswer === "yes") {
      setUi("bland");
    } else {
      setUi("color");
    }
  }

  return (
    <section className="Section UiChange">
      <h3>Turn on the bland</h3>
      <p>
        How does the environment affect the drive to over-gamble? It is believed
        that the lights and sounds of the game create an overall experience that
        promotes an atmosphere for excessive gambling. There is also the belief
        that the lights and sounds can encourage longer and faster playtimes in
        gamers.
      </p>

      <p>
        To counter the effects of this issue, I would like to suggest a setting
        that triggers a change in the lights, sounds, and colors of the game
        interface. Instead of presenting gamers with the positive sounds
        associated with wins, a more unpleasant sound can be used to denote
        losses and silence during wins. Since there are rarely full wins in max
        met gambling there will be a constant bombardment of noise that will
        hopefully motivate players to stop playing for a moment. During this
        time, the players will also no longer see light or vibrant colors, but
        instead, the game should be set to a grey or bland color scheme, making
        the gamer less appealing to the eye.
      </p>

      <img
        className="featureFlowchart"
        src={interfaceChange}
        alt="Screenshot of the flow of progression
      for this feature"
      />
      <small>
        <a
          href="https://www.figma.com/file/4mPLM1vuIK7vdJldZgh6PD/UI-Change-FlowChart?node-id=0%3A1"
          title="flowchart's figma file"
          target="_blank"
          rel="noreferrer"
        >
          Blurry? Click here.
        </a>
      </small>
      <div className="container">
        <div className="row" id="UiExample">
          <button onClick={triggerAlert} className="btn-primary col-3">
            Try mock example
          </button>
          <div className="col-9">
            <UiChangeExample uiSetting={uiSetting} />
          </div>
        </div>
        <div className="row mt-5 demoUi">
          <div className=" col-6 ">
            <video width="80%" hight="400px" controls>
              <source src={uiDemo} type="video/mp4" />
              <source src={uiDemoW} type="video/webm" />
            </video>
          </div>
          <div className="col-6">Or give the demo a play.</div>
        </div>
      </div>
    </section>
  );
}
