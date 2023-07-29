import React from "react";
import Comments from "./features/comments/Comments";
import { initDB } from "react-indexed-db-hook";
import { DBConfig } from "./app/DBConfig";

initDB(DBConfig);

function App(): JSX.Element {
  return (
    <div className="max-w-[800px] mx-auto px-4 pt-24 md:12">
      <h1 className="mb-14 text-4xl font-extrabold leading-none tracking-tight text-green-400 md:text-5xl lg:text-6xl dark:text-white">
        Leave your comment here
      </h1>
      <Comments />
    </div>
  );
}

export default App;
