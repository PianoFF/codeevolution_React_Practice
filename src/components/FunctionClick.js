import React from "react";

const FunctionClick = () => {
  const clickHandler = () => {
    console.log("Button's clicked");
  };
  return (
    <div>
      <button onClick={clickHandler}> Click </button>
    </div>
  );
};
export { FunctionClick };
