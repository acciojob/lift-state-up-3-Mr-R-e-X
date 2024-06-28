import React, { useState } from "react";
import Child from "./Child.js";
const ParentComponent = () => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <>
      <div className="parent">
      <h1>Parent Component</h1>
        {["Child Component 1", "Child Component 2"].map((option, idx) => (
          <Child
            key={idx}
            text={option}
            setOption={setSelectedOption}
            count={idx + 1}
          />
        ))}
      </div>
      <p>Selected Option: {selectedOption}</p>
    </>
  );
};

export default ParentComponent;
