import React from "react"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../redux/app/store"
import EditModal from "../components/EditModal"

describe("Edit modal component", () => {
  it("When the component starts, the inputs must receive the post title and content values", () => {
    render(
      <Provider store={store} >
        <EditModal />
      </Provider>
    )

    // Test here
  })
  
  it("When one or both inputs are empty, the save button must be disabled", () => {
    render(
      <Provider store={store} >
        <EditModal />
      </Provider>
    )
    
    // Test here
  })

  it("When the save button is pressed, must send a patch request to the API", () => {
    render(
      <Provider store={store} >
        <EditModal />
      </Provider>
    )
    
    // Test here
  })

  it("The component must render correctly", () => {
    const { container } = render(
      <Provider store={store} >
        <EditModal />
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })
})
