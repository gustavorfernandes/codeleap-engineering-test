/* eslint-disable @next/next/no-img-element */
import { IPost } from "../types/IPost"
import { formatDistanceToNow } from "date-fns"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/app/store"
import DeleteAlert from "./DeleteAlert"
import { AnimatePresence, motion } from "framer-motion"
import EditModal from "./EditModal"
import { setEditModal } from "../redux/app/slices/editModalSlice"
import { setDeleteAlert } from "../redux/app/slices/deleteAlertSlice"

function PostCard(post: IPost) {
  const datePost = new Date(post.created_datetime)
  const username = useSelector((state: RootState) => state.username.value)
  const editModal = useSelector((state: RootState) => state.editModal.value)
  const deleteAlert = useSelector((state: RootState) => state.deleteAlert.value)  

  const dispatch = useDispatch()

  return (
    <>
      <div className="w-10/12 flex flex-col font-roboto border border-neutral-300 mb-4">
        <div className="w-full flex items-center justify-between bg-black py-2 px-4 text-white font-bold text-sm">
          <h2>
            {post.title}
          </h2>
          <div className={`flex items-center gap-4 justify-between ${username != post.username && "hidden"}`}>
            <button
              onClick={() => {
                dispatch(setDeleteAlert(true))
              }}
            >
              <img
                className="w-[12px]"
                src="/images/delete-icon.png"
                alt="Delete"
              />
            </button>
            <button
              onClick={() => {
                dispatch(setEditModal(true))
              }}
            >
              <img
                className="w-[18px]"
                src="/images/edit-icon.png"
                alt="Edit"
              />
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3 p-3">
          <div className="w-full flex justify-between items-center">
            <span className="font-bold text-xs text-neutral-400">
              {`@${post.username}`}
            </span>
            <span className="text-xs text-neutral-400">
              {formatDistanceToNow(datePost, { addSuffix: true })}
            </span>
          </div>
          <div className="text-xs whitespace-pre-wrap">
            {post.content}
          </div>
        </div>
      </div>

      <AnimatePresence >
        {deleteAlert &&
          <>
            <div
              id="overlay"
              className="fixed z-10 inset-0 bg-neutral-400 opacity-60"
              onClick={() => {
                dispatch(setDeleteAlert(false))
              }}
            />
            <motion.div
              className="w-10/12 flex flex-col bg-white py-4 px-6 z-20 absolute top-20 font-roboto"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <DeleteAlert postID={post.id} />
            </motion.div>
          </>
        }

        {editModal &&
          <>
            <div
              id="overlay"
              className="fixed z-10 inset-0 bg-neutral-400 opacity-60"
              onClick={() => {
                dispatch(setEditModal(false))
              }}
            />
            <motion.div
              className="w-10/12 flex flex-col border border-neutral-300 bg-white py-3 px-4 z-20 absolute top-[25vh] font-roboto"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <EditModal postID={post.id} />
            </motion.div>
          </>
        }
      </AnimatePresence>
    </>
  )
}

export default PostCard
