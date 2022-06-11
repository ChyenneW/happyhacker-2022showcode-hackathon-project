import React, { useState } from "react";
import UiChangeExample from "./UiChangeExample";
import interfaceChange from "./images/interfaceChange.png";

export default function UiChange() {
  let [uiSetting, setUi] = useState("color");

  function handleClickBland(event) {
    event.preventDefault();
    setUi("bland");
  }

  function handleClickColor(event) {
    event.preventDefault();
    setUi("color");
  }

  return (
    <section className="Section">
      <h3>Turn on the bland</h3>
      <p>
        How does the environment affect the drive to over gamble?It is believed
        that the lights and sounds of the game create an overall experiance that
        promotes an atmosphere for exesive gambling. There is also the belief
        that the lights and sounds can encoureage longer and faster playtimes in
        gamers.
      </p>

      <p>
        To counter the affects of this issue, I would like to suggest a setting
        that triggers a change in the lights, sounds and colors of the game
        interface. Instead of presenting gamers with the positive sounds
        assosiated with wins, a more unpleasent sound can be used to denote
        loses and silence during wins. Since there are rarely full wins in max
        met gambling there will be a constant bombardment of noise that will
        hopefully motivate players to stop playing for a moment. During this
        time the players will also no longer see light or vibrent colors, but
        instead the game should be set to a grey or bland color scheme, making
        the gamer less appealing to the eye.
      </p>

      <img
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

        <button onClick={handleClickBland}>Its been 3 hours</button>
        <button onClick={handleClickColor}>Its been 3 minutes</button>

        <UiChangeExample uiSetting={uiSetting} />
      </small>
    </section>
  );
}
