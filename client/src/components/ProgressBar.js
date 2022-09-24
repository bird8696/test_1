import React from "react";

function ProgressBar(props) {
  // 총너비 / 총스텝 * 현재스텝 = 퍼센트
  const percent = (480 / 5) * props.step;

  return (
    <div className="progress-bar">
      <div className="percent" style={{ width: percent }}></div>
    </div>
  );
}

export default ProgressBar;
