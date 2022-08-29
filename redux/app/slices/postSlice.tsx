import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IPost } from "../../../types/IPost"

const initialState: IPost = {
  id: 0,
  title: "",
  content: "",
  author: ""
}

export const postContentSlice = createSlice({
  name: "postContent",
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<IPost>) => {
      state.title = action.payload.title,
      state.content = action.payload.content,
      state.author = action.payload.author
    },
  },
})

export const { setPost } = postContentSlice.actions
export default postContentSlice.reducer
