import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import deletePost from "../actions/deletePost"
import getPosts from "../actions/getPosts"
import { setDeleteAlert } from "../redux/app/slices/deleteAlertSlice"
import { orderByDate, setPostList } from "../redux/app/slices/postListSlice"
import { RootState } from "../redux/app/store"

function DeleteAlert() {
  const dispatch = useDispatch()

  const postID = useSelector((state: RootState) => state.postID.value)
  const deleteAlert = useSelector((state: RootState) => state.deleteAlert.value)

  return (
    <Transition
      appear
      show={deleteAlert}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          dispatch(setDeleteAlert(false))
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
              dispatch(setDeleteAlert(false))
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
              <Dialog.Panel className="w-10/12 max-w-md transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all absolute top-20 font-roboto">
                <Dialog.Title
                  as="h3"
                  className="text-xs mb-6"
                >
                  Are you sure you want to delete this item?
                </Dialog.Title>
                <div className="flex items-center justify-end gap-4">
                  <button
                    type="button"
                    className="text-xs h-[22px] w-16 border border-neutral-700 text-neutral-700 hover:border-black hover:text-black transition-all font-bold"
                    onClick={() => {
                      dispatch(setDeleteAlert(false))
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-xs h-[22px] w-16 border  border-neutral-700 text-neutral-700 hover:border-black hover:text-black transition-all font-bold"
                    type="submit"
                    onClick={() => {
                      dispatch(setDeleteAlert(false))
                      deletePost(postID)
                      getPosts().then((res) => {
                        const data = res.results
                        dispatch(setPostList(data))
                      })
                      dispatch(orderByDate())
                    }}
                  >
                    OK
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default DeleteAlert
