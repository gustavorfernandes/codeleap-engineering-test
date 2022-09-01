import axios from "axios"

async function editPost(postID: number, postTitle: string, postContent: string) {
  await axios.patch(`https://dev.codeleap.co.uk/careers/${postID}/`, {
    "title": postTitle,
    "content": postContent
  })
  .then(() => {
    console.log("Post edited successfully")
  })
  .catch(() => {
    console.log("Unable to edit your post")
  })  
}

export default editPost
