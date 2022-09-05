import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { makeStore } from '../redux/app/store/index'
import EditModal from "../components/EditModal"

describe("Edit modal component", () => { 
  it("The component must render correctly", () => {
    const store = makeStore()
    const { container } = render(
      <Provider store={store} >
        <EditModal />
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })
})
