import React from "react";
import { SetContext } from "../App";

function Answer(props) {
  const { setDispatechType } = React.useContext(SetContext);
  return (
    <button
      className="btn"
      onClick={() => {
        setDispatechType({
          code: "답변",
          params: {
            mbti: props.value,
          },
        });
      }}
    >
      {props.text}
    </button>
  );
}

export default Answer;
