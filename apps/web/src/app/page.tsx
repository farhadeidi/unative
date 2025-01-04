import React from "react";
import { PlatformDemo } from "unative/ui/m/platform-demo";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-2">
      <h1 className="font-bold text-3xl uppercase bg-primary p-8">
        UNATIVE
      </h1>
      <PlatformDemo />
    </div>
  );
};

export default Home;
