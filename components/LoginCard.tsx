import React, { useState } from "react"
import { RootState } from "../redux/app/store"
import { useSelector, useDispatch } from "react-redux"
import { setUsername } from "../redux/app/slices/usernameSlice"

function LoginCard() {
  const [inputValue, setInputValue] = useState("")
  const userName = useSelector((state: RootState) => state.username.value)
  const dispatch = useDispatch()

  function login(e: React.FormEvent) {
    e.preventDefault()
    dispatch(setUsername(inputValue))
    clearField()
  }

  function clearField() {
    setInputValue("")
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
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
            placeholder="John doe"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button
            className="self-end mt-4 bg-black text-white font-bold text-xs px-5 py-1 disabled:bg-neutral-300"
            type="submit"
            disabled={!inputValue}
          >
            ENTER
          </button>
        </form>
      </div>
    </div >
  )
}

export default LoginCard
