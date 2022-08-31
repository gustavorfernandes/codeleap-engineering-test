import { useDispatch, useSelector } from "react-redux"
import deletePost from "../actions/deletePost"
import getPosts from "../actions/getPosts"
import { setDeleteAlert } from "../redux/app/slices/deleteAlertSlice"
import { setPostList } from "../redux/app/slices/postListSlice"
import { RootState } from "../redux/app/store"

function DeleteAlert() {
  const postID = useSelector((state: RootState) => state.postID.value)  
  
  const dispatch = useDispatch()

  return (
    <div className="w-full flex flex-col">
      <span className="text-xs mb-6">
        Are you sure you want to delete this item?
      </span>
      <div className="flex items-center justify-end gap-4">
        <button
          className="text-xs h-[22px] w-16 border border-neutral-700 text-neutral-700 hover:border-black hover:text-black transition-all font-bold"
          onClick={() => {
            dispatch(setDeleteAlert(false))
          }}
        >
          Cancel
        </button>
        <button
          className="text-xs h-[22px] w-16 border  border-neutral-700 text-neutral-700 hover:border-black hover:text-black transition-all font-bold"
          onClick={() => {
            dispatch(setDeleteAlert(false))
            deletePost(postID)
            getPosts().then((res) => {
              dispatch(setPostList(res))
            })
          }}
        >
          OK
        </button>
      </div>
    </div>
  )
}

export default DeleteAlert
