/* eslint-disable react-hooks/exhaustive-deps */
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useEffect } from "react"
import editPost from "../actions/editPost"
import getPosts from "../actions/getPosts"
import { useAppSelector, useAppDispatch } from "../redux/app/hooks"
import { setEditModal } from "../redux/app/slices/editModalSlice"
import { setPostContent } from "../redux/app/slices/postContentSlice"
import { orderByDate, setPostList } from "../redux/app/slices/postListSlice"
import { setPostTitle } from "../redux/app/slices/postTitleSlice"

function EditModal() {
  const dispatch = useAppDispatch()
  const deleteAlert = useAppSelector((state) => state.deleteAlert.value)
  const editModal = useAppSelector((state) => state.editModal.value)
  const postTitle = useAppSelector((state) => state.postTitle.value)
  const postContent = useAppSelector((state) => state.postContent.value)
  const postID = useAppSelector((state) => state.postID.value)

  function submitForm(e: React.FormEvent) {
    e.preventDefault()
  }

  useEffect(() => {
    return function cleanup() {
      if (!deleteAlert && !editModal) {
        document.documentElement.style.overflowY = 'auto';
        document.documentElement.style.paddingRight = '0px';        
      }
    }
  })

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
            className="fixed inset-0 bg-neutral-400/10"
            aria-hidden="true"
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
              <Dialog.Panel className="w-11/12 max-w-[45.625rem] transform overflow-hidden bg-white p-4 sm:p-6 md:p-8 text-left align-middle shadow-xl transition-all font-roboto">
                <Dialog.Title
                  as="h3"
                  className="font-bold text-sm sm:text-xl md:text-[22px] mb-4"
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
                    className="text-xs sm:text-sm md:text-base mb-1 sm:mb-2"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    className="w-full text-xs sm:text-[13px] md:text-sm outline-none border border-neutral-400 rounded py-1 px-2 sm:px-3 mb-4"
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
                    className="text-xs sm:text-sm md:text-base mb-1 sm:mb-2"
                    htmlFor="content"
                  >
                    Content
                  </label>
                  <textarea
                    className="w-full text-xs sm:text-[13px] md:text-sm outline-none border border-neutral-400 rounded py-1 px-2 sm:px-3 mb-4 resize-none"
                    name="content"
                    id="content"
                    rows={4}
                    placeholder="Content here"
                    value={postContent}
                    onChange={(e) => {
                      dispatch(setPostContent(e.target.value))
                    }}
                  />
                  <button
                    className="self-end mt-2 sm:mt-4 md:mt-6 bg-black hover:bg-neutral-800 transition-all text-white font-bold text-xs sm:text-sm md:text-base px-5 sm:px-7 md:px-9 py-1 disabled:bg-neutral-300"
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
