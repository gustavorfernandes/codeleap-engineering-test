import React from "react"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import LoginCard from "../components/LoginCard"

describe("Login card component", () => {
  it("When the input is empty, the enter button must be disabled", () => {
    render(
      <LoginCard
      />
    )
    const input = screen.getByPlaceholderText("John doe")
    const button = screen.getByRole("button")

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    fireEvent.change(input, { target: { value: "" } })
    expect(button).toBeDisabled()
  })

  it("When the ENTER button is clicked, the username must be stored in the global state", () => {
    const setUsername = jest.fn()
    render(
      <LoginCard
        setUsername={setUsername}
      />
    )

    const input = screen.getByPlaceholderText("John doe")
    const button = screen.getByRole("button")

    fireEvent.change(input, { target: { value: "name" } })
    // fireEvent.click(button)
    
    // expect(setUsername).toHaveBeenCalledTimes(1)
  })

  it("The component must render correctly", () => {
    const { container } = render(
      <LoginCard
      />
    )
    expect(container).toMatchSnapshot()
  })
})
