import React, { useMemo } from "react";
import { Comment as TComment } from "../types/Comment";
import { getLeaf } from "../icons/leaves/getLeaf";
import trashSvg from "../icons/trash.svg";
import { useIndexedDB } from "react-indexed-db-hook";

function Comment(props: TComment) {
  const { deleteRecord } = useIndexedDB("comments");

  const leaf = useMemo(() => getLeaf(Math.floor(Math.random() * 18)), []);

  return (
    <div className="relative my-2 flex p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="w-6 h-6 mt-1 mr-2" src={leaf} alt="ava" />
      <div>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-green-400 dark:text-white">
          {props.author}
        </h5>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {props.content}
        </p>
        <button
          className="absolute top-4 right-4 cursor-pointer hover:scale-110"
          onClick={() => {
            deleteRecord(props.id);
          }}
        >
          <img className="w-8 h-8" src={trashSvg} alt="delete" />
        </button>
      </div>
    </div>
  );
}

export default Comment;
