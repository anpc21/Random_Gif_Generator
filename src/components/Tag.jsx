import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {
  const [tag, setTag] = useState("");

  const { gif, loading, fetchData } = useGif();

  const changeHandler = (e) => {
    setTag(e.target.value);
  };

  return (
    <div className="rounded-xl border border-black bg-blue-400 w-1/2 flex flex-col items-center gap-y-5">
      <h1 className="text-2xl mt-5 underline uppercase font-bold">
        Random {tag} Gif
      </h1>
      {loading ? <Spinner /> : <img width="450" src={gif} alt="Random Gif" />}
      <input
        className="text-center w-10/12 py-2 rounded-lg "
        onChange={changeHandler} placeholder="Enter Tag Name"
      ></input>
      <button
        className="bg-orange-300 w-10/12 py-2 rounded-lg mb-5 hover:bg-grey-100"
        onClick={() => fetchData(tag)}
      >
        Generate
      </button>
    </div>
  );
}
