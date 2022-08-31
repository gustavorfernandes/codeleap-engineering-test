import { configureStore } from "@reduxjs/toolkit"
import usernameReducer from "../slices/usernameSlice"
import editModalReducer from "../slices/editModalSlice"
import deleteAlertReducer from "../slices/deleteAlertSlice"

export const store = configureStore({
  reducer: {
    username: usernameReducer,
    editModal: editModalReducer,
    deleteAlert: deleteAlertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
