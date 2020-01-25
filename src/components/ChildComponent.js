import React from "react";

export const ChildComponent = ({ greetHandler }) => {
  return (
    <div>
      <button onClick={() => greetHandler("Child")}> Greet Parent</button>
    </div>
  );
};
