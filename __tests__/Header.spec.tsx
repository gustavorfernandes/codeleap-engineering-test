import { makeStore } from '../redux/app/store/index'
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import Header from "../components/Header"

describe("Header component", () => {
  it("The component must render correctly", () => {
    const store = makeStore()
    const { container } = render(
      <Provider store={store} >
        <Header />
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })
})
