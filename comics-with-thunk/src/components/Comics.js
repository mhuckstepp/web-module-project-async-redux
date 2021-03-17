import { useState } from "react";

const Comics = () => {
  const [comicNum, setComicNum] = useState(0);

  const clickHandler = () => {
    setComicNum(Math.floor(Math.random() * 50));
  };

  return (
    <div>
      <button onClick={() => clickHandler()}> Change Comic</button>
      <h1>Comic Here</h1>
      <p>{comicNum}</p>
    </div>
  );
};

export default Comics;
