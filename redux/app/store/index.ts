import { configureStore } from "@reduxjs/toolkit"
import usernameReducer from "../slices/usernameSlice"
import editModalReducer from "../slices/editModalSlice"
import deleteAlertReducer from "../slices/deleteAlertSlice"
import postListReducer from "../slices/postListSlice"
import postIDReducer from "../slices/postIDSlice"
import postTitleReducer from "../slices/postTitleSlice"
import postContentReducer from "../slices/postContentSlice"

export const store = configureStore({
  reducer: {
    username: usernameReducer,
    editModal: editModalReducer,
    deleteAlert: deleteAlertReducer,
    postList: postListReducer,
    postID: postIDReducer,
    postTitle: postTitleReducer,
    postContent: postContentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
