import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { makeStore } from '../redux/app/store/index'
import LoginCard from "../components/LoginCard"

describe("Login card component", () => {
  it("When the input is empty, the enter button must be disabled", () => {
    const store = makeStore()
    render(
      <Provider store={store}>
        <LoginCard />
      </Provider>
    )
    const input = screen.getByPlaceholderText("John doe")
    const button = screen.getByRole("button")

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    fireEvent.change(input, { target: { value: "" } })
    expect(button).toBeDisabled()
  })

  it("The component must render correctly", () => {
    const store = makeStore()
    const { container } = render(
      <Provider store={store}>
        <LoginCard />
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })
})
