import React, { useState } from "react";
import AudialCheckExample from "./AudialCheckExample";
import audialCheck from "./images/audialCheck.png";
import audialDemo from "./images/audialDemo.mp4";

export default function AudialCheck() {
  let [mockConfirmed, setMockConfirmed] = useState("no");

  function setToUnconfirm() {
    setMockConfirmed("No");
  }

  function triggerAlert() {
    setMockConfirmed("yes");
    console.log("clicked");
  }

  return (
    <section className="Section">
      <h3>How many did you win?</h3>

      <p>
        The theory of "losses disguised as wins" suggests that gamers have a
        warped silence of their total win-to-lose ratio. This happens because
        gamers can bet on multiple lines at a time. A successful bet on even one
        line triggers a win, even though the bet on multiple lines results in a
        net reward less than the original bet.
        <br />
        Another factor that may contribute, to gamers' warped perception is the
        lack of counteractive distractions they face in a home setting. With the
        added distractions, gamers have an easier chance of zoning playing a
        game for hours.
      </p>

      <p>
        To counter the effects of these issues, I would like to suggest a voice
        alert that highlights the disparities in wins and loses as well as there
        net lost in cost, then ask the gamer if they would like to set player
        limits or continue playing. This will allow the gamer to see how many
        times and how much they have lost {"("}comparing lines lost rather than
        spins won{")"}. Since we regularly encounter silent pop-ups while using
        the internet a voice alert added to the pop-up may have a stronger
        effect on grabbing the gamer's attention, and invoke a true
        self-reflection over the reality check questions.
      </p>

      <img
        src={audialCheck}
        alt="Screenshot of the flow of progression
      for this feature"
      />
      <small>
        <a
          href="https://www.figma.com/file/rRScnD5HCXovP9sXABN5tG/Audial-Check-Feature?node-id=0%3A1"
          title="flowchart's figma file"
          target="_blank"
          rel="noreferrer"
        >
          Blurry? Click here.
        </a>
      </small>
      <div id="AudialExample">
        <div className="liveTryAudial">
          <button onClick={triggerAlert} className="btn-primary">
            Try mock example
          </button>
          <br />
          <p>Or play the demo</p>
          <AudialCheckExample
            mockConfirmed={mockConfirmed}
            stopMock={setToUnconfirm}
          />
        </div>
        <div className="demoAudial">
          <video width="80%" height="400px" controls>
            <source src={audialDemo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
