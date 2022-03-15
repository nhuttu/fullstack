import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogReducer";

const store = configureStore({
  reducer: { anecdotes: blogReducer },
});
export default store;
