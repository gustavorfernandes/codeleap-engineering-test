import { makeStore } from '../redux/app/store/index'
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import PostCard from '../components/PostCard'

describe("Post card component", () => {
  it("Edit and delete buttons must be enabled for the current user", () => {
    const store = makeStore()
    let currentUser = "John Doe"

    render(
      <Provider store={store} >
        <PostCard key={null} id={null} title={null} created_datetime={null} content={null} username={currentUser} />
      </Provider>
    )

    const editIcon = screen.getByAltText("Edit")
    const deleteIcon = screen.getByAltText("Delete")

    expect(editIcon).toBeInTheDocument()
    expect(deleteIcon).toBeInTheDocument()
  })

  it("The component must render correctly", () => {
    const store = makeStore()
    const { container } = render(
      <Provider store={store}>
        <PostCard key={null} id={null} title={null} created_datetime={null} content={null} username={null} />
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })
})
