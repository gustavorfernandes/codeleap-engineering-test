import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IPostTitle {
  value: string
}

const initialState: IPostTitle = {
  value: ""
}

export const postTitleSlice = createSlice({
  name: "postTitle",
  initialState,
  reducers: {
    setPostTitle: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setPostTitle } = postTitleSlice.actions
export default postTitleSlice.reducer
