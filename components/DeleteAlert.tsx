import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useEffect } from "react"
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
  const editModal = useSelector((state: RootState) => state.editModal.value)

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
            className="fixed inset-0 bg-neutral-400/10"
            aria-hidden="true"
          />
        </Transition.Child>
        <div className="fixed inset-0">
          <div className="fixed inset-0 flex items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-10/12 max-w-[20rem] sm:max-w-[30rem] md:max-w-[41.5rem] transform bg-white p-4 sm:p-6 md:p-8 text-left align-middle shadow-xl transition-all absolute top-[5.625rem] sm:top-[6.625rem] font-roboto">
                <Dialog.Title
                  as="h3"
                  className="text-xs sm:text-lg md:text-[22px] mb-8 sm:mb-12"
                >
                  Are you sure you want to delete this item?
                </Dialog.Title>
                <div className="flex items-center justify-end gap-4">
                  <button
                    type="button"
                    className="text-xs sm:text-sm md:text-base h-[1.375rem] sm:h-[1.75rem] md:h-[2.5rem] w-16 sm:w-[5rem] md:w-[7rem] border border-neutral-700 text-neutral-700 hover:border-black hover:text-black transition-all font-bold"
                    onClick={() => {
                      dispatch(setDeleteAlert(false))
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-xs sm:text-sm md:text-base h-[22px] sm:h-[1.75rem] md:h-[2.5rem] sm:w-[5rem] md:w-[7rem] w-16 border border-neutral-700 text-neutral-700 hover:border-black hover:text-black transition-all font-bold"
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
    </Transition >
  )
}

export default DeleteAlert
