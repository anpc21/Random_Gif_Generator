import Spinner from './Spinner';
import useGif from '../hooks/useGif';


export default function Random() {
 const {gif,loading,fetchData}=useGif();

  return (
    <div className="rounded-xl border border-black bg-green-400 w-1/2 flex flex-col items-center gap-y-5">
      <h1 className="text-2xl mt-5 underline uppercase font-bold">
        Random Gif
      </h1>
      {loading ? <Spinner /> : <img width="450" src={gif} alt="Random Gif" />}
      <button
        className="bg-orange-300 w-10/12 py-2 rounded-lg mb-5"
        onClick={()=>fetchData()}
      >
        Generate
      </button>
    </div>
  );
}
