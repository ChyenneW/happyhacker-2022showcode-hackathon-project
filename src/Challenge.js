import React from "react";

export default function Challenge() {
  return (
    <section className="Section Challenge">
      <h3>What does a "safer betting experiance" mean?</h3>
      <p>
        A safer betting experiance creates a mutually safe interaction between
        gamers/gamblers and the game hosts. It protects the gamers from their
        own potential financial self-destruction and from potential hosts may be
        operating outside of set regulations.
      </p>
      <h3>What are some of the current player facing controls?</h3>
      <ul>
        <li>
          Player Limits {"("}These are player controled setting that can limit
          things like deposit amounts, spending and time playing.{")"}
        </li>
        <li>
          Player Exclusions {"("}These player or host set controls on a
          playtime. This can include shorter blocks on platime in the form of
          self-exclusion and breaks or longer exclusion periods that reqiure
          more effort to lift.{")"}
        </li>
        <li>
          Access to help {"("}Links in this section should provide users with
          information on resources, help from the game operater, or limits that
          block targeted margeting to highly active gamblers.{")"}
        </li>
        <li>
          Reality Checks {"("}These are breif interuptions in playtime that
          gives the players an opportunity to do a self-check on their current
          state. It also offers the player the oppertunity to look into other
          safe gambling tools.{")"}
        </li>
      </ul>
    </section>
  );
}
