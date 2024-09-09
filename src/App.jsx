import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen relative flex flex-col items-center background overflow-x-hidden">
      <h1
        className=" bg-white rounded-lg w-11/12 text-center mt-[40px]
       px-10 py-2 text-4xl font-bold "
      >
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full mt-10 items-center gap-y-10">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}
