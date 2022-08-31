import { useState } from "react"
import { useDispatch } from "react-redux"
import editPost from "../actions/editPost"
import { setEditModal } from "../redux/app/slices/editModalSlice"

function EditModal(props: any) {
  const [inputTitle, setInputTitle] = useState("")
  const [inputContent, setInputContent] = useState("")
  
  const dispatch = useDispatch()

  function submitForm(e: React.FormEvent) {
    e.preventDefault()
  } 

  return (
    <div className="w-full flex flex-col">
      <span className="font-bold text-sm mb-4">
        Edit item
      </span>
      <form
        className="w-full flex flex-col"
        onSubmit={(e: React.FormEvent) => {
          submitForm(e)
        }}
      >       
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
          rows={3}
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
            dispatch(setEditModal(false))
            editPost(props.postID, inputTitle, inputContent)
          }}
        >
          SAVE
        </button>
      </form>
    </div>
  )
}

export default EditModal
