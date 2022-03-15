import { createSlice } from "@reduxjs/toolkit";
import blogService from "../services/blogs";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      console.log(action.payload, "payload");
      return action.payload;
    },
  },
});
export const initalize = () => {
  return async (dispatch) => {
    const anecdotes = await blogService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};
console.log(anecdoteSlice.getInitialState(), "tässä initial");
export const newBlog = async () => {};
export const { setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
