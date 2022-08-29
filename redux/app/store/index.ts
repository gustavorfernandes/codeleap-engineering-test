import { configureStore } from "@reduxjs/toolkit"
import usernameReducer from "../slices/usernameSlice"
import postTitleReducer from "../slices/postTitleSlice"
import postContentReducer from "../slices/postTitleSlice"

export const store = configureStore({
  reducer: {
    username: usernameReducer,
    postTitle: postTitleReducer,
    postContent: postContentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
