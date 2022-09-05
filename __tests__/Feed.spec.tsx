import { makeStore } from '../redux/app/store/index'
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import Feed from "../components/Feed"

describe("Feed component", () => {
  it("The component must render correctly", () => {
    const store = makeStore()
    const { container } = render(
      <Provider store={store} >
        <Feed />
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })
})
