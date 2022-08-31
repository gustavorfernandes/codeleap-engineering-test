/* eslint-disable @next/next/no-img-element */
import { IPost } from "../types/IPost"
import { formatDistanceToNow } from "date-fns"
import { useSelector } from "react-redux"
import { RootState } from "../redux/app/store"

function PostCard(post: IPost) {
  const datePost = new Date(post.created_datetime)
  const username = useSelector((state: RootState) => state.username.value)

  return (
    <div className="w-10/12 flex flex-col font-roboto border border-neutral-300 mb-4">
      <div className="w-full flex items-center justify-between bg-black py-2 px-4 text-white font-bold text-sm">
        <h2>
          {post.title}
        </h2>
        <div className={`flex items-center gap-4 justify-between ${username != post.username && "hidden"}`}>
          <button
            onClick={() => {
              console.log("Open delete modal")
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
              console.log("Open edit modal")
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
  )
}

export default PostCard
