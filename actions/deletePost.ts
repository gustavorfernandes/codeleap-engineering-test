import axios from "axios"

async function deletePost(postID: string) {
  await axios.delete(`http://localhost:8080/posts/${postID}/`)
  .then(() => {
    console.log("Post deleted successfully")
  })
  .catch(() => {
    console.log("Unable to delete your post")
  })  
}

export default deletePost
