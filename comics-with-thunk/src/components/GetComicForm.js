import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const GetComicForm = () => {
  let history = useHistory();
  const [number, setNumber] = useState("");
  const [error, setError] = useState(false);

  let comicNumEstimate = Math.floor((Date.now() / 86400000 - 18708) / 3);

  const changeHandler = (e) => {
    if (
      e.target.value >= 0 &&
      e.target.value < Math.ceil(2440 + comicNumEstimate)
    ) {
      setNumber(e.target.value);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(number);
    history.push(`/${number}`);
  };

  return (
    <div className="flex flex-col items-center mb-6">
      <p className="mt-8">Jump to comic by #</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          class="focus:ring-indigo-500 focus:border-indigo-500 block text-xl border-gray-300 rounded-md"
          type="number"
          name="jumpToNum"
          value={number}
          onChange={changeHandler}
        ></input>
        <button className="btn btn-blue self-center my-4 ml-20 " type="submit">
          Jump
        </button>
        {error && (
          <p className="text-red-700 text-xl">
            {" "}
            must be between 1 and {Math.ceil(2440 + comicNumEstimate)}
          </p>
        )}
      </form>
    </div>
  );
};

export default GetComicForm;
