/* eslint-disable @next/next/no-img-element */
import { IPost } from "../types/IPost"
import { formatDistanceToNow } from "date-fns"
import { useAppSelector, useAppDispatch } from "../redux/app/hooks"
import { setEditModal } from "../redux/app/slices/editModalSlice"
import { setDeleteAlert } from "../redux/app/slices/deleteAlertSlice"
import { setPostID } from "../redux/app/slices/postIDSlice"
import { setPostTitle } from "../redux/app/slices/postTitleSlice"
import { setPostContent } from "../redux/app/slices/postContentSlice"

function PostCard(post: IPost) {
  const datePost = new Date(post.created_datetime)
  const username = useAppSelector((state) => state.username.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <div className="w-11/12 flex flex-col font-roboto border border-neutral-300 mb-8 sm:mb-10 md:mb-12">
        <div className="w-full flex items-center justify-between bg-black py-2 px-4 sm:py-6 sm:px-8 sm:h-16 md:h-[4.375rem] text-white font-bold text-sm sm:text-xl md:text-[22px]">
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
                className="w-[12px] sm:w-[15px] md:w-[17.5px]"
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
                className="w-[18px] sm:w-[20.5px] md:w-[22.5px]"
                src="/images/edit-icon.png"
                alt="Edit"
              />
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3 p-3 sm:p-6 md:p-8">
          <div className="w-full flex justify-between items-center">
            <span className="font-bold text-xs sm:text-base md:text-[18px] text-neutral-400 sm:mb-1">
              {`@${post.username}`}
            </span>
            <span className="text-xs sm:text-base md:text-[18px] text-neutral-400">
              {formatDistanceToNow(datePost, { addSuffix: true })}
            </span>
          </div>
          <div className="text-xs sm:text-base md:text-[18px] whitespace-pre-wrap">
            {post.content}
          </div>
        </div>
      </div>
    </>
  )
}

export default PostCard
