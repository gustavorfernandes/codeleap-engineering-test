import PostCard from "./PostCard"
import { posts } from "../utils/data.json"

function Feed() {  
  return (
    <div className="w-screen bg-white flex flex-col items-center">        
      {posts &&
        posts.map((post) => (
          <PostCard key={post.id} id={post.id} title={post.title} content={post.content} author={post.author} />
        ))}
    </div>
  )
}

export default Feed
