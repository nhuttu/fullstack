import anecdoteReducer from "./anecdoteReducer";
import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./notificationReducer";


const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        notification: notificationReducer   
    }
})
export default store