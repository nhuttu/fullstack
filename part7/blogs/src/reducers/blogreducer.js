import blogService from "../services/blogs";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const sortedBlogs = (blogs) => {
  return blogs.sort((a, b) => b.votes - a.votes);
};
const initialState = [];
const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITALIZE":
      return sortedBlogs(action.data);
    default:
      return state;
  }
};
export const initialize = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    console.log(blogs, "L16");
    dispatch({
      type: "INITALIZE",
      data: blogs,
    });
  };
};
export default blogReducer;
