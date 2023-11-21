import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "where creativity knows no bounds",
          "the art of sound comes to life",
          "GHI",
          "JKL",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 69,
      }}
    />
  );
}

export default Type;
