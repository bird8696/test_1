import React from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigation = useNavigate();

  return (
    <div className="main-app">
      <img
        src="https://kakaofriendsmbti.netlify.app/static/media/00.88f71908.png"
        alt="메인이미지"
      />
      <button
        className="btn"
        type="button"
        onClick={() => {
          navigation("on1");
        }}
      >
        시작하기
      </button>
    </div>
  );
}

export default Main;
