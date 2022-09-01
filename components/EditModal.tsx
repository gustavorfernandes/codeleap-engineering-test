/* eslint-disable react-hooks/exhaustive-deps */
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import editPost from "../actions/editPost"
import getPosts from "../actions/getPosts"
import { setEditModal } from "../redux/app/slices/editModalSlice"
import { setPostContent } from "../redux/app/slices/postContentSlice"
import { orderByDate, setPostList } from "../redux/app/slices/postListSlice"
import { setPostTitle } from "../redux/app/slices/postTitleSlice"
import { RootState } from "../redux/app/store"

function EditModal() {
  const dispatch = useDispatch()

  const editModal = useSelector((state: RootState) => state.editModal.value)
  const postTitle = useSelector((state: RootState) => state.postTitle.value)
  const postContent = useSelector((state: RootState) => state.postContent.value)
  const postID = useSelector((state: RootState) => state.postID.value)

  function submitForm(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <Transition
      appear
      show={editModal}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          dispatch(setEditModal(false))
        }}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            id="overlay"
            className="fixed inset-0 bg-neutral-400 bg-opacity-30"
            onClick={() => {
              dispatch(setEditModal(false))
            }}
          />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-11/12 max-w-md transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all font-roboto">
                <Dialog.Title
                  as="h3"
                  className="font-bold text-sm mb-4"
                >
                  Edit item
                </Dialog.Title>
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
                    value={postTitle}
                    onChange={(e) => {
                      dispatch(setPostTitle(e.target.value))
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
                    value={postContent}
                    onChange={(e) => {
                      dispatch(setPostContent(e.target.value))
                    }}
                  />
                  <button
                    className="self-end my-2 bg-black hover:bg-neutral-800 transition-all  text-white font-bold text-xs px-5 py-1  disabled:bg-neutral-300"
                    type="submit"
                    disabled={!postTitle || !postContent}
                    onClick={() => {
                      dispatch(setEditModal(false))
                      editPost(postID, postTitle, postContent)
                      getPosts().then((res) => {
                        const data = res.results
                        dispatch(setPostList(data))
                      })
                      dispatch(orderByDate())
                    }}
                  >
                    SAVE
                  </button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default EditModal
