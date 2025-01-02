import { ThemeSwitch } from "@/components/theme-switch";
import React from "react";
import { libraryEnvironment } from "unative";

console.log("dev => libraryEnvironment", libraryEnvironment);

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-2">
      <h1 className="font-bold text-3xl uppercase">
        {libraryEnvironment === "web" ? "Web" : "Native"}
      </h1>
      {/* <Button variant="primary">Button Component</Button> */}
      <ThemeSwitch />
    </div>
  );
};

export default Home;
