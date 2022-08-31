import Link from "next/link"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { setUsername } from "../redux/app/slices/usernameSlice"

function LoginCard() {
  const [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch()

  function login(e: React.FormEvent) {
    e.preventDefault()    
    clearField()
  }

  function clearField() {
    setInputValue("")
  }

  return (
    <div className="w-screen h-screen bg-neutral-100 flex items-center justify-center">
      <div className="w-11/12 bg-white border border-neutral-200 p-4">
        <form
          className="flex flex-col justify-center font-roboto "
          onSubmit={(e: React.FormEvent) => {
            login(e)
          }}
        >
          <h2 className="font-bold mb-4">
            Welcome to CodeLeap network!
          </h2>
          <label
            className="text-xs"
            htmlFor="username"
          >
            Please enter your username
          </label>
          <input
            className="w-full outline-none border border-neutral-400 rounded mt-2 text-xs pl-1 py-[3px]"
            name="username"
            id="username"
            placeholder="John doe"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <Link href="/dashboard">
            <a className="self-end">
              <button
                className="mt-4 bg-black hover:bg-neutral-800 transition-all text-white font-bold text-xs px-5 py-1  disabled:bg-neutral-300"            
                type="submit"
                disabled={!inputValue}
                onClick={()=> {
                  dispatch(setUsername(inputValue))
                }}
              >
                ENTER
              </button>
            </a>
          </Link>
        </form>
      </div>
    </div >
  )
}

export default LoginCard
