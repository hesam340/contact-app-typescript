import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div className="w-full mt-52 flex justify-center min-h-[1000px]">
      <RotatingLines
        width="100px"
        height="100px"
        strokeColor="#304ffe"
        strokeWidth="3"
      />
    </div>
  );
}

export default Loader;
