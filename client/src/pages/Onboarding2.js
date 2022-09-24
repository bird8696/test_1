import React from "react";
import { ProgressBar, Question, Answer } from "../components";

function Onboarding2() {
  return (
    <div className="main-app">
      <ProgressBar step={2} />
      <Question imageUrl="https://kakaofriendsmbti.netlify.app/images/02-01.png" />
      <Answer text="영화 완전 재미었어! 너도 한번 봐봐!" value="S" />
      <Answer
        text="좀비가 너무 리얼했어. 실제 상황이면 난 바로 죽었을거야..."
        value="N"
      />
    </div>
  );
}

export default Onboarding2;
