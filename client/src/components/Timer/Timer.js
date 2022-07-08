import React, { useContext } from "react";
import "./Timer.css";
import SocketContext from "../../context/socketContext";

const Timer = ({ round, word, id, secs, setSecs }) => {
  const ctx = useContext(SocketContext);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setSecs((prev) => prev - 1);
  //   }, 1000);
  // }, [secs]);
  if (id !== ctx.id) {
    console.log(word);
    const arr = word.split(" ");
    let charCounter = 0;
    let temp = "";
    for (let i = 0; i < arr.length; i++) {
      temp = temp + `_ `.repeat(arr[i].length) + `\xa0\xa0`;
      charCounter += arr[i].length;
    }
    word = `${temp}(${charCounter})`;
    console.log(word);
  }

  return (
    <React.Fragment>
      <div className="round text-center fs-4 text">{round}/3</div>
      <div className="drawingObj text-center fs-4 text">{word}</div>
      <div className="timer text-center fs-4 text">{secs}</div>
    </React.Fragment>
  );
};
export default Timer;