import React from "react";
import { isNative, Box, Button } from "unative";

const Home = () => {
  return (
    <Box className="min-h-screen flex flex-col justify-center items-center gap-2">
      <h1 className="font-bold text-3xl uppercase">Unative</h1>
      <h1 className="font-bold text-3xl uppercase">
        {isNative ? "Native" : "Web"}
      </h1>
      <Button>Click me</Button>
    </Box>
  );
};

export default Home;
