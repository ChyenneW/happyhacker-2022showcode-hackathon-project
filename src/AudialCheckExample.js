import React from "react";

export default function AudialCheckExample({ mockConfirmed, stopMock }) {
  function playTellRatioVoice() {
    let tellRatioVoice = new SpeechSynthesisUtterance();
    window.speechSynthesis.speak(tellRatioVoice);
    tellRatioVoice.text =
      "You have bet on 1000 lines but you have only won 20 lines. Your win to loss ratio is 1:50. You are winning at a 2% rate";
    tellRatioVoice.onstart = alert(
      "You have bet on 1000 lines but you have only won 20 lines. Your win to loss ratio is 1:50. You are winning at a 2% rate"
    );
  }

  function ratioConfirmPlayerLimits() {
    let confirmForPlayerLimitsVoice = new SpeechSynthesisUtterance();
    confirmForPlayerLimitsVoice.text =
      "Would you like to visit the Player Limits settings before you continue?";
    confirmForPlayerLimitsVoice.onstart = function () {
      let confirmForPlayerLimits = prompt(
        "Would you like to visit the Player Limits settings before you continue?"
      );
      if (confirmForPlayerLimits === "yes") {
        alert("loading Player Limits");
        stopMock();
      } else {
        alert("Thank you for your feedback.");
        stopMock();
      }
    };
    window.speechSynthesis.speak(confirmForPlayerLimitsVoice);
  }
  function noRatioConfirmPlayerLimits() {
    let confirmForPlayerLimitsVoice = new SpeechSynthesisUtterance();
    confirmForPlayerLimitsVoice.text =
      "Would you like to visit the Player Limits settings?";
    confirmForPlayerLimitsVoice.onstart = function () {
      let confirmForPlyerLimits = prompt(
        "Would you like to visit the Player Limits settings?"
      );
      if (confirmForPlyerLimits === "yes") {
        alert("loading Player Limits");
        stopMock();
      } else {
        let confirmForPlay = prompt("Would you like to continue playing?");
        if (confirmForPlay === "no") {
          alert("Thanks for playing we will see you next time.");
          stopMock();
        } else {
          alert("Thank you for your feedback.");
          stopMock();
        }
      }
    };
    window.speechSynthesis.speak(confirmForPlayerLimitsVoice);
  }

  function playMockExample() {
    let audialCheckVoice = new SpeechSynthesisUtterance();
    audialCheckVoice.text = "Hello, You have been playing for one hour";
    audialCheckVoice.onstart = function () {
      alert("Hello, You have been playing for one hour");

      let voiceForRatio = new SpeechSynthesisUtterance();
      voiceForRatio.text =
        "Would you like to know your win to lose ratio for today?";
      window.speechSynthesis.speak(voiceForRatio);

      voiceForRatio.onstart = function () {
        let confirmForRatio = prompt(
          "Would you like to know your win to lose ratio for today?"
        );
        if (confirmForRatio === "yes") {
          playTellRatioVoice();
          let confirmForPlay = prompt("Would you like to continue playing?");
          if (confirmForPlay === "no") {
            alert("Thanks for playing we will see you next time");
            stopMock();
          } else {
            ratioConfirmPlayerLimits();
          }
        } else {
          noRatioConfirmPlayerLimits();
        }
      };
    };
    window.speechSynthesis.speak(audialCheckVoice);
  }

  if (mockConfirmed === "yes") {
    playMockExample();
    return <div />;
  } else {
    return <div />;
  }
}