import axios from "axios"

async function deletePost(postID: number) {
  await axios.delete(`https://dev.codeleap.co.uk/careers/${postID}/`)
  .then(() => {
    console.log("Post deleted successfully")
  })
  .catch(() => {
    console.log("Unable to delete your post")
  })  
}

export default deletePost
