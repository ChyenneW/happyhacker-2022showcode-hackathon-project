import React from "react";

export default function Challenge() {
  return (
    <section className="Section Challenge">
      <h3>What does a "safer betting experiance" mean?</h3>
      <p>
        A safer betting experience creates a mutually safe interaction between
        gamers/gamblers and the game hosts. It protects the gamers from their
        potential financial self-destruction and potential hosts may be
        operating outside of set regulations.
      </p>
      <h3>What are some of the current player facing controls?</h3>
      <ul>
        <li>
          Player Limits {"("}These are player-controlled settings that can limit
          things like deposit amounts, spending, and time playing.{")"}
        </li>
        <li>
          Player Exclusions {"("}These player or host set controls on a
          playtime. This can include shorter blocks on playtime in the form of
          self-exclusion and breaks or longer exclusion periods that require
          more effort to lift.{")"}
        </li>
        <li>
          Access to help {"("}Links in this section should provide users with
          information on resources, help from the game operator, or limits that
          block targeted marketing to highly active gamblers.{")"}
        </li>
        <li>
          Reality Checks {"("}These are brief interruptions in playtime that
          allows the players to do a self-check on their current state. It also
          offers the player the opportunity to look into other safe gambling
          tools.{")"}
        </li>
      </ul>
    </section>
  );
}
