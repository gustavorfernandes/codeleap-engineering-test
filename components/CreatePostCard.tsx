
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setPostTitle } from "../redux/app/slices/postTitleSlice"
import { setPostContent } from "../redux/app/slices/postContentSlice"

function CreatePostCard() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const dispatch = useDispatch()

  function insertPost(e: React.FormEvent) {
    e.preventDefault()
    clearFields()
  }

  function clearFields() {
    setTitle("")
    setContent("")
  }

  return (
    <div className="w-screen bg-white flex items-center justify-center py-6">
      <form
        className="w-10/12 border rounded-sm border-neutral-300 flex flex-col py-3 px-4 font-roboto"
        onSubmit={(e: React.FormEvent) => {
          insertPost(e)
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label
          className="text-xs mb-1"
          htmlFor="content"
        >
          Content
        </label>
        <textarea
          className="w-full h-16 text-xs outline-none border border-neutral-400 rounded py-1 px-2 mb-4  resize-none"
          name="content"
          id="content"
          placeholder="Content here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="self-end my-2 bg-black text-white font-bold text-xs px-5 py-1  disabled:bg-neutral-300"
          type="submit"
          disabled={!title || !content}
          onClick={() => {
            setPostTitle(title)
            setPostContent(content)
          }}
        >
          CREATE
        </button>
      </form>
    </div>
  )
}

export default CreatePostCard
