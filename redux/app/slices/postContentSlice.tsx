import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IPostContent {
  value: string
}

const initialState: IPostContent = {
  value: ""
}

export const postContentSlice = createSlice({
  name: "postContent",
  initialState,
  reducers: {
    setPostContent: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setPostContent } = postContentSlice.actions
export default postContentSlice.reducer
