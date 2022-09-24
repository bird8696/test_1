import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import AppIndex from "./AppIndex";

/**
 * 1. import : 외부에 있는 모듈(함수나 변수) 가져올떄 사용
 * 2. export : 내부에 있는 모듈을 외부로 전달해줄떄 사용
 *
 * React router dom : 리액트 내에서 페이지 이동 도와주는 라이브러리
 *
 */

export const SetContext = React.createContext({});

function App() {
  const navigation = useNavigate();
  const [dispatchType, setDispatechType] = React.useState({
    code: "",
    params: null,
  });
  const [mbti, setMbti] = React.useState([
    {
      I: 0, // 내향형
      E: 0, // 외향형
    },
    {
      S: 0, // 현실형
      N: 0, // 이상주의형
    },
    {
      T: 0, // 이상적
      F: 0, // 감상적
    },
    {
      P: 0, // 즉흥형
      J: 0, // 계획형
    },
  ]);

  React.useEffect(() => {
    switch (dispatchType.code) {
      case "답변":
        const clickedMbti = dispatchType.params.mbti;

        const cloneMbti = [...mbti];

        const obj = {
          name: "",
          age: 0,
        };

        const findIndex = cloneMbti.findIndex((value) => {
          return value.hasOwnProperty(clickedMbti);
        });

        cloneMbti[findIndex][clickedMbti]++;

        setMbti(cloneMbti);

        const pathnmae = window.location.pathname;
        const NextPage = Number(pathnmae.charAt(pathnmae.length - 1)) + 1;

        navigation(`/on${NextPage}`);

        if (NextPage === 6) {
          navigation(`/result`, {
            state: {
              mbti: mbti,
            },
          });
        } else {
          navigation(`/on${NextPage}`);
        }

        break;

      default:
        break;
    }
  }, [dispatchType]);

  return (
    <SetContext.Provider value={{ setDispatechType: setDispatechType }}>
      <AppIndex />
    </SetContext.Provider>
  );
}

export default App;
