import React, { useState } from "react";
import "./../styles/App.css";
import Child from "./Child.js";
const App = () => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div>
      <div className="parent">
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
    </div>
  );
};

export default App;
