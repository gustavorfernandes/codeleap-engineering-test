import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IUsername {
  value: string
}

const initialState: IUsername = {
  value: ""
}

export const usernameSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setUsername } = usernameSlice.actions
export default usernameSlice.reducer
