import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IDeleteAlert {
  value: boolean
}

const initialState: IDeleteAlert = {
  value: false
}

export const deleteAlertSlice = createSlice({
  name: "deleteAlert",
  initialState,
  reducers: {
    setDeleteAlert: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

export const { setDeleteAlert } = deleteAlertSlice.actions
export default deleteAlertSlice.reducer
