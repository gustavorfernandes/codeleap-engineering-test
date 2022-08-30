import axios from "axios"

async function getPosts() {  
  const data = await axios.get("http://localhost:8080/posts/")
    .then((response) => {
      return response.data
    })
    .catch(() => {
      console.log("Unable to list posts")
    })
  return data
}

export default getPosts
