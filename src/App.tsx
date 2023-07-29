import React from "react";
import Comments from "./features/comments/Comments";
import Lottie from "lottie-react";
import { initDB } from "react-indexed-db-hook";
import { DBConfig } from "./app/DBConfig";
import animationData from "./animations/animation.json";

initDB(DBConfig);

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

function App(): JSX.Element {
  return (
    <>
      <div className="max-w-[800px] mx-auto px-4 pt-24 md:12">
        <h1 className="mb-14 text-4xl font-extrabold leading-no tracking-tight text-green-400 md:text-5xl lg:text-6xl dark:text-white">
          Leave your comment here
        </h1>
        <Comments />
      </div>
      <Lottie
        className="w-[128px] h-[128px] mx-auto absolute top-4 left-4"
        animationData={animationData}
        autoplay
        loop
      />
    </>
  );
}

export default App;
