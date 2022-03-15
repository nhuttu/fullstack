import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogreducer";
import errorReducer from "./errorreducer";
import notificationReducer from "./notificationreducer";
const store = configureStore({
  reducer: {
    blogs: blogReducer,
    notification: notificationReducer,
    errorMessage: errorReducer,
  },
});

export default store;
