import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IEditModal {
  value: boolean
}

const initialState: IEditModal = {
  value: false
}

export const editModalSlice = createSlice({
  name: "editModal",
  initialState,
  reducers: {
    setEditModal: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

export const { setEditModal } = editModalSlice.actions
export default editModalSlice.reducer
