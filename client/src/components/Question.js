import React from "react";

function Question(props) {
  return (
    <div style={{ marginTop: 60, marginBottom: 60 }}>
      <img src={props.imageUrl} alt="온보딩이미지" />
    </div>
  );
}

export default Question;
