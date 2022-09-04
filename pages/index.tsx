import type { NextPage } from "next"
import Head from "next/head"
import LoginCard from "../components/containers/LoginCard.container"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CodeLeap | Engineering Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <LoginCard />
    </>
  )
}

export default Home
