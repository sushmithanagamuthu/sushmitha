import React,{useState} from "react";

const DynamicRendering = () => {
  let clickedFramework = -1;
  const stateArr=useState(-1);
  const arr = ["react", "angular", "nextjs", "javascript"];
  return (
    <ul>
      {arr.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  );
};

export default DynamicRendering;