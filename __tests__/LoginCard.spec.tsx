import { fireEvent, render, screen } from "@testing-library/react"
import user from '@testing-library/user-event'
import { Provider } from "react-redux"
import LoginCard from "../components/LoginCard"
import { store } from "../redux/app/store"
import { setUsername} from "../redux/app/slices/usernameSlice"

describe("Login card component", () => {
  it("When the input is empty, the enter button must be disabled", () => {
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

  it("When the ENTER button is clicked, the username must be stored in the global state through the setUsername function", () => {    
    const setUsername = jest.fn()
    
    render(
      <Provider store={store}>
        <LoginCard />
      </Provider>
    )

    fireEvent.change(screen.getByPlaceholderText("John doe"), { target: { value: "name" } })

    user.click(screen.getByRole(/button/i))

    expect(setUsername).toHaveBeenCalledTimes(1)
  })

  it("The component must render correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <LoginCard />
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })
})
