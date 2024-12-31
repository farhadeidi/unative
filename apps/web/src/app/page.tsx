import React from "react";
import { isNative } from "unative";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-2">
      <h1 className="font-bold text-3xl uppercase">Unative</h1>
      <h1 className="font-bold text-3xl uppercase">
        {isNative ? "Native" : "Web"}
      </h1>
    </div>
  );
};

export default Home;
