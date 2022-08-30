import axios from "axios"

async function createPost(username: string, title: string, content: string) {
  const data = await axios.post("http://localhost:8080/posts/", {
    username: username,
    created_datetime: new Date(),
    title: title,
    content: content
  })
  .catch((error) => {
    console.log("Unable to create your post")
  })
  return data
}

export default createPost
