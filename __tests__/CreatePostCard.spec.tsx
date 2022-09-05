import React from "react"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../redux/app/store"
import CreatePostCard from "../components/CreatePostCard"

describe("Create post card component", () => {
  it("When one or both inputs are empty, the create button must be disabled", () => {
    render(
      <Provider store={store} >
        <CreatePostCard />
      </Provider>
    )
    const inputTitle = screen.getByPlaceholderText("Hello world")
    const inputContent = screen.getByPlaceholderText("Content here")
    const button = screen.getByRole("button")

    expect(inputTitle).toBeInTheDocument()
    expect(inputContent).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(button).toBeDisabled()
        
    fireEvent.change(inputTitle, { target: { value: "" } })
    fireEvent.change(inputContent, { target: { value: "" } })
    expect(button).toBeDisabled()

    fireEvent.change(inputTitle, { target: { value: "value" } })
    fireEvent.change(inputContent, { target: { value: "" } })
    expect(button).toBeDisabled()

    fireEvent.change(inputTitle, { target: { value: "" } })
    fireEvent.change(inputContent, { target: { value: "value" } })
    expect(button).toBeDisabled()
  })

  it("When the create button is pressed, must send a post request to the API", () => {
    render(
      <Provider store={store} >
        <CreatePostCard />
      </Provider>
    )

    // Test here
  }) 

  it("The component must render correctly", () => {
    const { container } = render(
      <Provider store={store} >
        <CreatePostCard />
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })
})
