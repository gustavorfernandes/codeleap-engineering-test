import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IPostList {
  value: Array<any>
}

const initialState: IPostList = {
  value: []
}

export const postListSlice = createSlice({
  name: "postList",
  initialState,
  reducers: {
    setPostList: (state, action: PayloadAction<[]>) => {
      state.value = action.payload
    },
    orderByDate: (state) => {
      const sortBy = (date: string) => (a: any, b: any) => a[date] > b[date] ? -1 : 1
      state.value = state.value.sort(sortBy("created_datetime"))
    }
  },
})

export const { setPostList, orderByDate } = postListSlice.actions
export default postListSlice.reducer
