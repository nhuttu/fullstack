import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogreducer";
const store = configureStore({
  reducer: {
    blogs: blogReducer,
  },
});

export default store;
