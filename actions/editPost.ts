import axios from "axios"

async function editPost(postID: string, postTitle: string, postContent: string) {
  await axios.patch(`http://localhost:8080/posts/${postID}/`, {
    "title": postTitle,
    "content": postContent
  })
  .catch(() => {
    console.log("Unable to edit your post")
  })  
}

export default editPost
