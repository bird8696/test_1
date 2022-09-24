import React from "react";
import { ProgressBar, Question, Answer } from "../components";

function Onboarding5() {
  return (
    <div className="main-app">
      <ProgressBar step={5} />
      <Question imageUrl="https://kakaofriendsmbti.netlify.app/images/05-01.png" />
      <Answer
        text="그래! 역시 사람 많고 유명한 벚꽃 명소가 예쁘겠지 어디로 갈까?"
        value="E"
      />
      <Answer text="그래! 사람 적은 벚꽃 명소 한 번 찾아볼까?" value="I" />
    </div>
  );
}

export default Onboarding5;
