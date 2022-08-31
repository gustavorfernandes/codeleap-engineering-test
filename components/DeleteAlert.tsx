import { useDispatch } from "react-redux"
import deletePost from "../actions/deletePost"
import { setDeleteAlert } from "../redux/app/slices/deleteAlertSlice"

function DeleteAlert(props: any) {
  const dispatch = useDispatch()  
  
  return (
    <div className="w-full flex flex-col">
      <span className="text-xs mb-6">
        Are you sure you want to delete this item?
      </span>
      <div className="flex items-center justify-end gap-4">
        <button
          className="text-xs h-[22px] w-16 border border-black font-bold"
          onClick={() => {
            dispatch(setDeleteAlert(false))
          }}
        >
          Cancel
        </button>
        <button
          className="text-xs h-[22px] w-16 border border-black font-bold"
          onClick={() => {
            dispatch(setDeleteAlert(false))
            deletePost(props.postID)
          }}
        >
          OK
        </button>
      </div>
    </div>
  )
}

export default DeleteAlert
