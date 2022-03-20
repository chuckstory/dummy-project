import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const BasicUseEffect = () => {
  const [count, setCount] = useState(0);

  const [countClicked, setCountClicked] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      console.log("setCount called");
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      console.log("clearTimeout Called");
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    console.log("rerender");
  }, [countClicked])

  const handleClick = () => {
    setCountClicked(countClicked + 1);
  }

  return (
    <>
      <h1>I've rendered {count} times!</h1>
      <h1>Clicked count: {countClicked}</h1>
      <button onClick={handleClick}>Click!!!</button>
    </>
  );
};

export default BasicUseEffect;
