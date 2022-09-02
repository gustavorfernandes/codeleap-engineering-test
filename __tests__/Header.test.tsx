import React from "react"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../redux/app/store"
import Header from "../components/Header"

describe("Header component", () => {
  it("The component must render correctly", () => {
    const { container } = render(
      <Provider store={store} >
        <Header />
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })
})
