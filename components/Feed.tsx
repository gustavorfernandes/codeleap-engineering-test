/* eslint-disable react-hooks/exhaustive-deps */
import PostCard from "./PostCard"
import getPosts from "../actions/getPosts"
import { useEffect } from "react"
import { IPost } from "../types/IPost"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/app/store"
import { orderByDate, setPostList } from "../redux/app/slices/postListSlice"
import { AnimatePresence, motion } from "framer-motion"
import DeleteAlert from "./DeleteAlert"
import { setDeleteAlert } from "../redux/app/slices/deleteAlertSlice"
import { setEditModal } from "../redux/app/slices/editModalSlice"
import EditModal from "./EditModal"

function Feed() {
  const dispatch = useDispatch()

  dispatch(orderByDate())

  const postList = useSelector((state: RootState) => state.postList.value)
  const deleteAlert = useSelector((state: RootState) => state.deleteAlert.value)
  const editModal = useSelector((state: RootState) => state.editModal.value)

  useEffect(() => {
    getPosts().then((res) => {
      dispatch(setPostList(res))
    })
  }, [])

  return (
    <>
      <div className="w-screen bg-white flex flex-col items-center">
        {postList &&
          postList.map((post: IPost) => (
            <>
              <PostCard key={post.id} id={post.id} title={post.title} created_datetime={post.created_datetime} content={post.content} username={post.username} />

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
                      <DeleteAlert />
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
                    <div className="w-10/12 max-w-sm flex items-center justify-center absolute z-20 top-20">
                      <motion.div
                        className="w-full flex flex-col border border-neutral-300 bg-white py-3 px-4 font-roboto"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <EditModal />
                      </motion.div>
                    </div>
                  </>
                }
              </AnimatePresence>
            </>
          ))}
      </div>
    </>
  )
}

export default Feed
