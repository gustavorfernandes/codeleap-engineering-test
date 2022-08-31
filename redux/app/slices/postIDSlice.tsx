import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IPostID {
  value: number
}

const initialState: IPostID = {
  value: 0
}

export const postIDSlice = createSlice({
  name: "postID",
  initialState,
  reducers: {
    setPostID: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

export const { setPostID } = postIDSlice.actions
export default postIDSlice.reducer
