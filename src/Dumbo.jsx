import { useState } from "react";

function generateGameBoard() {
  return Array(5000);
}

export default function Dumbo() {
  const [board, setBoard] = useState(generateGameBoard);
  const changeState = () => {
    setBoard("hello");
  };
  return (
    <>
      <button onClick={changeState}>Click to change state</button>
    </>
  );
}

//initializer function what can be passed to useState initially
