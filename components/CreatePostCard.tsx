import { useState } from "react"
import createPost from "../actions/createPost"
import { useAppSelector, useAppDispatch } from "../redux/app/hooks"
import { orderByDate, setPostList } from "../redux/app/slices/postListSlice"
import getPosts from "../actions/getPosts"

function CreatePostCard() {
  const [inputTitle, setInputTitle] = useState("")
  const [inputContent, setInputContent] = useState("")
  const username = useAppSelector((state) => state.username.value)
  const dispatch = useAppDispatch()

  function submitForm(e: React.FormEvent) {
    e.preventDefault()
    clearFields()
  }

  function clearFields() {
    setInputTitle("")
    setInputContent("")
  }

  return (
    <div className="w-screen max-w-[800px] bg-white flex items-center justify-center py-6 sm:py-10 md:py-12">
      <form
        className="w-11/12 border rounded-sm border-neutral-300 flex flex-col p-4 sm:p-6 md:p-8 font-roboto"
        onSubmit={(e: React.FormEvent) => {
          submitForm(e)
        }}
      >
        <h1 className="font-bold text-sm sm:text-xl md:text-[22px] mb-3 sm:mb-5">
          {`What's on your mind?`}
        </h1>
        <label
          className="text-xs sm:text-sm md:text-base mb-1 sm:mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          className="w-full text-xs sm:text-[13px] md:text-sm outline-none border border-neutral-400 rounded py-1 px-2 mb-4"
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
          className="text-xs sm:text-sm md:text-base mb-1 sm:mb-2"
          htmlFor="content"
        >
          Content
        </label>
        <textarea
          className="w-full text-xs sm:text-[13px] md:text-sm outline-none border border-neutral-400 rounded py-1 px-2 mb-4 resize-none"
          name="content"
          id="content"
          rows={4}
          placeholder="Content here"
          value={inputContent}
          onChange={(e) => {
            setInputContent(`${e.target.value}`)
          }}
        />
        <button
          className="self-end mt-4 sm:mt-6 mb-2 bg-black hover:bg-neutral-800 transition-all text-white font-bold text-xs sm:text-sm md:text-base px-5 sm:px-7 py-1 disabled:bg-neutral-300"
          type="submit"
          disabled={!inputTitle || !inputContent}
          onClick={() => {
            createPost(username, inputTitle, inputContent)
            getPosts().then((res) => {
              const data = res.results
              dispatch(setPostList(data))
            })
            dispatch(orderByDate())
          }}
        >
          CREATE
        </button>
      </form>
    </div>
  )
}

export default CreatePostCard
