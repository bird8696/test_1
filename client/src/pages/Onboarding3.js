import React from "react";
import { ProgressBar, Question, Answer } from "../components";

function Onboarding3() {
  return (
    <div className="main-app">
      <ProgressBar step={3} />
      <Question imageUrl="https://kakaofriendsmbti.netlify.app/images/03-01.png" />
      <Answer text="무슨 꽃 샀어? 향은 좋아?" value="T" />
      <Answer text="왜 우울해? 무슨 일 있어?" value="F" />
    </div>
  );
}

export default Onboarding3;
