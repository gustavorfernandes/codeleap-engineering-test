/* eslint-disable react-hooks/exhaustive-deps */
import PostCard from "./PostCard"
import { IPost } from "../types/IPost"
import { useAppSelector, useAppDispatch } from "../redux/app/hooks"
import { orderByDate, setPostList } from "../redux/app/slices/postListSlice"
import EditModal from "./EditModal"
import DeleteAlert from "./DeleteAlert"
import getPosts from "../actions/getPosts"
import { useEffect } from "react"

function Feed() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    getPosts().then((res) => {
      const data = res.results
      dispatch(setPostList(data))
    })
    dispatch(orderByDate())    
  })

  const postList = useAppSelector((state) => state.postList.value)

  return (
    <>
      <div className="w-screen max-w-[800px] bg-white flex flex-col items-center">
        {postList &&
          postList.map((post: IPost) => (
            <>
              <PostCard key={post.id} id={post.id} title={post.title} created_datetime={post.created_datetime} content={post.content} username={post.username} />

              <DeleteAlert />

              <EditModal />
            </>
          ))}
      </div>
    </>
  )
}

export default Feed
