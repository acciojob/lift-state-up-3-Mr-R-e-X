import React from "react";

const Child = ({ text, setOption, count }) => {
  let btnOpt = "Option " + count;
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setOption(btnOpt)}>{btnOpt}</button>
    </div>
  );
};

export default Child;
