/* eslint-disable @next/next/no-img-element */
import { IPost } from "../types/IPost"
import { formatDistanceToNow } from "date-fns"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/app/store"
import { setEditModal } from "../redux/app/slices/editModalSlice"
import { setDeleteAlert } from "../redux/app/slices/deleteAlertSlice"
import { setPostID } from "../redux/app/slices/postIDSlice"
import { setPostTitle } from "../redux/app/slices/postTitleSlice"
import { setPostContent } from "../redux/app/slices/postContentSlice"

function PostCard(post: IPost) {
  const datePost = new Date(post.created_datetime)
  const username = useSelector((state: RootState) => state.username.value)

  const postID = useSelector((state: RootState) => state.postID.value)
  const postTitle = useSelector((state: RootState) => state.postTitle.value)
  const postContent = useSelector((state: RootState) => state.postContent.value)

  const dispatch = useDispatch()

  return (
    <>
      <div className={`w-10/12 flex flex-col font-roboto border border-neutral-300 mb-4`}>
        <div className="w-full flex items-center justify-between bg-black py-2 px-4 text-white font-bold text-sm">
          <h2>
            {post.title}
          </h2>
          <div className={`flex items-center gap-4 justify-between ${username != post.username && "hidden"}`}>
            <button
              onClick={() => {
                dispatch(setDeleteAlert(true))
                dispatch(setPostID(post.id))
              }}
            >
              <img
                className="w-[12px]"
                src="/images/delete-icon.png"
                alt="Delete"
              />
            </button>
            <button
              onClick={() => {
                dispatch(setEditModal(true))
                dispatch(setPostID(post.id))                
                dispatch(setPostTitle(post.title))
                dispatch(setPostContent(post.content))
              }}
            >
              <img
                className="w-[18px]"
                src="/images/edit-icon.png"
                alt="Edit"
              />
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3 p-3">
          <div className="w-full flex justify-between items-center">
            <span className="font-bold text-xs text-neutral-400">
              {`@${post.username}`}
            </span>
            <span className="text-xs text-neutral-400">
              {formatDistanceToNow(datePost, { addSuffix: true })}
            </span>
          </div>
          <div className="text-xs whitespace-pre-wrap">
            {post.content}
          </div>
        </div>
      </div>      
    </>
  )
}

export default PostCard
