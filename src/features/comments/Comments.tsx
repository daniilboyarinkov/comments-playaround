import React, { useCallback, useEffect, useState } from "react";
import CommentTextArea from "../../components/CommentTextArea";
import Comment from "../../components/Comment";
import type { Comment as TComment } from "../../types/Comment";
import { useIndexedDB } from "react-indexed-db-hook";

function Comments() {
  const toComment = useCallback(
    (comment: TComment) => <Comment key={comment.id} {...comment} />,
    []
  );

  // redux usage
  // const comments = useAppSelector((state) => state.comments);

  const { getAll } = useIndexedDB("comments");
  const [comments, setComments] = useState<TComment[]>([]);

  useEffect(() => {
    getAll().then((commentsFromDB: TComment[]) => {
      setComments(commentsFromDB);
    });
  }, [getAll]);

  return (
    <div>
      <CommentTextArea />
      {comments.map(toComment)}
    </div>
  );
}

export default Comments;
