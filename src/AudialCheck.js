import React, { useState } from "react";
import AudialCheckExample from "./AudialCheckExample";
import audialCheck from "./images/audialCheck.png";

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
        warped silence of their total win to lose ratio. This happens because
        gamers have the ability to bet on multiple lines at a time. A
        successfull bet on even one line triggers a win, even though the bet on
        multiple lines results in a net reward less that the original bet.
        <br />
        Another factor that may contribute to gamers warped perseption is the
        lack of counteractive destractions the face in a home setting. With the
        added destractions gamers have an easier chace of zoning playing a game
        for hours.
      </p>

      <p>
        To counter the affects of these issues, I would like to suggest a voice
        alert that highlights the disparities in wins and loses as well as there
        net lost in cost, then ask the gamer if they would like to set player
        limits or continue playing. This will allow the gamer to clearly see how
        many times and how much they have lost {"("}comparing lines lost rather
        than spins won{")"}. Since we regulary encounter silent pop-ups while
        using the internet a voice alert added to the pop-up may have a stronger
        effect on grabbing the gamer's attention, and envock a true
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
      <button onClick={triggerAlert}>Try mock example</button>
      <AudialCheckExample
        mockConfirmed={mockConfirmed}
        stopMock={setToUnconfirm}
      />
    </section>
  );
}
