import React from "react";
import { libraryEnvironment } from "unative";
import { ThemeSwitch } from "unative/ui/m/theme-switch";
import { PlatformDemo } from "unative/ui/m/platform-demo";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-2">
      <h1 className="font-bold text-3xl uppercase">
        Heading {libraryEnvironment}
      </h1>
      <ThemeSwitch />
      <PlatformDemo />
      {/* <Button variant="primary">Button Component</Button> */}
    </div>
  );
};

export default Home;
