import React from "react"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../redux/app/store"
import DeleteAlert from "../components/DeleteAlert"

describe("Delete alert component", () => {
  it("When the ok button is pressed, must send a delete request to the API", () => {
    render(
      <Provider store={store} >
        <DeleteAlert />
      </Provider>
    )

    // Test here
  }) 

  it("The component must render correctly", () => {
    const { container } = render(
      <Provider store={store} >
        <DeleteAlert />
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })
})
