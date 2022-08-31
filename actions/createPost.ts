import axios from "axios"

async function createPost(username: string, title: string, content: string) {
  await axios.post("http://localhost:8080/posts/", {
    username: username,
    created_datetime: new Date(),
    title: title,
    content: content
  })
  .then(() => {
    console.log("Post created successfully")
  })
  .catch((error) => {
    console.log("Unable to create your post")
  })  
}

export default createPost
