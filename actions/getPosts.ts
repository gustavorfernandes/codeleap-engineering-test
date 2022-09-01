import axios from "axios"

async function getPosts() {  
  const data = await axios.get("https://dev.codeleap.co.uk/careers/")
    .then((response) => {
      return response.data
    })
    .catch(() => {
      console.log("Unable to list posts")
    })
  return data
}

export default getPosts
