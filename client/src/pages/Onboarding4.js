import React from "react";
import { ProgressBar, Question, Answer } from "../components";

function Onboarding4() {
  return (
    <div className="main-app">
      <ProgressBar step={4} />
      <Question imageUrl="https://kakaofriendsmbti.netlify.app/images/04-01.png" />
      <Answer
        text="지금 PPT 만드는 중이니까 아마 한 2시간 뒤면 끝날거 같아!"
        value="J"
      />
      <Answer text="모르겠어. 근데 지금 PPT 만들고 있어!" value="P" />
    </div>
  );
}

export default Onboarding4;
