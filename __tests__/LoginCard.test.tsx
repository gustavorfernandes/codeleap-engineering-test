import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import LoginCard from "../components/LoginCard"
import { Provider } from "react-redux"
import { store } from "../redux/app/store"

describe("Login card component", () => {
  it("When the input is empty, the enter button must be disabled", () => {
    render(
      <Provider store={store} >
        <LoginCard />
      </Provider>
    )
    const input = screen.getByPlaceholderText("John doe")
    const button = screen.getByRole("button")
    expect(input).toBeInTheDocument()
    expect(button).toBeDisabled()
  })

  it("The component must render correctly", () => {
    const { container } = render(
      <Provider store={store} >
        <LoginCard />
      </Provider>
    )    
    expect(container).toMatchSnapshot()    
  })
})