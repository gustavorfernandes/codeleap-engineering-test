
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import createPost from "../actions/createPost"
import getPosts from "../actions/getPosts"
import { RootState } from "../redux/app/store"

function CreatePostCard() {
  const [inputTitle, setInputTitle] = useState("")
  const [inputContent, setInputContent] = useState("")
  const username = useSelector((state: RootState) => state.username.value)
  
  const dispatch = useDispatch()

  function submitForm(e: React.FormEvent) {
    e.preventDefault()
    clearFields()
  }

  function clearFields() {
    setInputTitle("")
    setInputContent("")
  }

  return (
    <div className="w-screen bg-white flex items-center justify-center py-6">
      <form
        className="w-10/12 border rounded-sm border-neutral-300 flex flex-col py-3 px-4 font-roboto"
        onSubmit={(e: React.FormEvent) => {
          submitForm(e)
        }}
      >
        <h1 className="font-bold text-sm mb-3">
          {`What's on your mind?`}
        </h1>
        <label
          className="text-xs mb-1"
          htmlFor="title"
        >
          Title
        </label>
        <input
          className="w-full text-xs outline-none border border-neutral-400 rounded py-1 px-2 mb-4"
          name="title"
          id="title"
          placeholder="Hello world"
          type="text"
          value={inputTitle}
          onChange={(e) => {            
            setInputTitle(e.target.value)            
          }}
        />
        <label
          className="text-xs mb-1"
          htmlFor="content"
        >
          Content
        </label>
        <textarea
          className="w-full text-xs outline-none border border-neutral-400 rounded py-1 px-2 mb-4 resize-none"
          name="content"
          id="content"
          rows={5}
          placeholder="Content here"
          value={inputContent}
          onChange={(e) => {
            setInputContent(`${e.target.value}`)           
          }}
        />
        <button
          className="self-end my-2 bg-black text-white font-bold text-xs px-5 py-1  disabled:bg-neutral-300"
          type="submit"
          disabled={!inputTitle || !inputContent}
          onClick={() => {            
            createPost(username, inputTitle, inputContent)
            getPosts()
          }}
        >
          CREATE
        </button>
      </form>
    </div>
  )
}

export default CreatePostCard
