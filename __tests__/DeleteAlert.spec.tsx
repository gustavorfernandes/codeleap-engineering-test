import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { makeStore } from "../redux/app/store"
import DeleteAlert from "../components/DeleteAlert"

describe("Delete alert component", () => {  
  it("The component must render correctly", () => {
    const store = makeStore()
    const { container } = render(
      <Provider store={store}>
        <DeleteAlert />
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })
})
