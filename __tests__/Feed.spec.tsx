import React from "react"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../redux/app/store"
import Feed from "../components/Feed"

describe("Feed component", () => {
  it("When the component starts, it should list the posts", () => {
    render(
      <Provider store={store} >
        <Feed />
      </Provider>
    )
    //teste
  })

  it("The component must render correctly", () => {
    const { container } = render(
      <Provider store={store} >
        <Feed />
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })
})
