import type { NextPage } from 'next'
import Head from 'next/head'
import CreatePostCard from '../components/CreatePostCard'
import Header from '../components/Header'
import Feed from '../components/Feed'
import getPosts from '../actions/getPosts'
import { useAppDispatch } from "../redux/app/hooks"
import { setPostList } from '../redux/app/slices/postListSlice'

export async function getServerSideProps() {
  const initialPostList = getPosts().then((res) => {
    return res
  })
  return {
    props: initialPostList
  }
}

const Home: NextPage = (props: any) => {
  const data = props.results
  const dispatch = useAppDispatch()

  dispatch(setPostList(data))

  return (
    <div className='w-screen bg-neutral-100 flex flex-col items-center justify-center'>
      <Head>
        <title>CodeLeap | Engineering Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <CreatePostCard />

      <Feed />
    </div>
  )
}

export default Home
