import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "../../types/Comment";
import { WithoutId } from "../../types/utils";

export const initialComment: WithoutId<Comment> = {
  author: "Anonym",
  likes: 0,
  replies: [],
};

const initialState: Comment[] = [];

export const counterSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<Comment>) => {
      state.push(action.payload);
    },
    // action.payload = id
    deleteComment: (state, action: PayloadAction<string>) => {
      state.filter((comment) => comment.id !== action.payload);
    },
    // action.payload = id
    likeComment: (state, action: PayloadAction<string>) => {
      const commentToLike = state.find(
        (comment) => comment.id === action.payload
      );
      if (!commentToLike) return;
      commentToLike.likes++;
    },
  },
});

export const { addComment, deleteComment, likeComment } = counterSlice.actions;

export default counterSlice.reducer;
