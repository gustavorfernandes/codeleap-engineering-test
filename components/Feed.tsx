import PostCard from "./PostCard"
import getPosts from "../actions/getPosts"
import { useEffect, useState } from "react"

function Feed() {
  const [postList, setPostList] = useState([])

  useEffect(() => {
    getPosts().then((res) => {
      setPostList(res)
    })
  }, [])

  return (
    <>
      <div className="w-screen bg-white flex flex-col items-center">
        {postList &&
          postList.map((post: any) => (
            <PostCard key={post.id} title={post.title} created_datetime={post.created_datetime} content={post.content} username={post.username} />
          ))}
      </div>
    </>
  )
}

export default Feed
