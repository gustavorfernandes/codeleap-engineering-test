import Link from "next/link"
import React, { useState } from "react"
import { ISetUsername } from "./containers/LoginCard.container"

function LoginCard({ setUsername }: ISetUsername) {
  const [inputValue, setInputValue] = useState("")

  function login(e: React.FormEvent) {
    e.preventDefault()
    clearField()
  }

  function clearField() {
    setInputValue("")
  }

  return (
    <div className="w-screen h-screen bg-neutral-100 flex items-center justify-center">
      <div className="w-11/12 max-w-[20rem] sm:max-w-[25rem] md:max-w-[31.25rem] bg-white border border-neutral-200 p-4 sm:p-5 md:p-6">
        <form
          className="flex flex-col justify-center font-roboto"
          onSubmit={(e: React.FormEvent) => {
            login(e)
          }}
        >
          <h2 className="font-bold mb-4 sm:mb-5 md:mb-6 sm:text-xl md:text-[22px]">
            Welcome to CodeLeap network!
          </h2>
          <label
            className="text-xs sm:text-sm md:text-base md:mb-1"
            htmlFor="username"
          >
            Please enter your username
          </label>
          <input
            className="w-full outline-none border border-neutral-400 rounded mt-2 mb-4 text-xs sm:text-[13px] md:text-sm pl-2 py-[3px]"
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
                className="bg-black hover:bg-neutral-800 transition-all text-white font-bold text-xs sm:text-sm md:text-base px-5 sm:px-7 py-1 disabled:bg-neutral-300"
                type="submit"
                disabled={!inputValue}
                onClick={() => {
                  setUsername(inputValue)
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
