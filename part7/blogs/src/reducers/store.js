import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogreducer";
import notificationReducer from "./notificationreducer";
const store = configureStore({
  reducer: {
    blogs: blogReducer,
    notification: notificationReducer,
  },
});

export default store;
