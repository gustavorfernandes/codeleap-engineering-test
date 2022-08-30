import { IPost } from "../types/IPost"
import { formatDistanceToNow } from "date-fns"

function PostCard(post: IPost) {
  const datePost = new Date(post.created_datetime)

  return (
    <div className="w-10/12 flex flex-col font-roboto border border-neutral-300 mb-4">
      <div className="w-full bg-black p-2 text-white font-bold text-sm">
        {post.title}
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
