import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Result() {
  const { state } = useLocation();
  const navigation = useNavigate();
  const [캐릭터, set캐릭터] = React.useState({});
  /*
    서버와 데이터 주고 받을때 쓰는 axios
  */
  const sendMbti = async () => {
    await axios({
      method: "post",
      url: "http://localhost:5000/mbti",
      params: state,
    })
      .then((response) => {
        const data = response.data;
        set캐릭터(data);
      })
      .catch(() => {})
      .finally(() => {});
  };

  React.useEffect(() => {
    sendMbti();
  }, []);

  return (
    <div className="result-img-wrap">
      <img className="result-img" src={캐릭터.content} alt={캐릭터.name} />
      <button
        className="btn"
        onClick={() => {
          navigation("/on1");
        }}
      >
        다시하기
      </button>
    </div>
  );
}

export default Result;
