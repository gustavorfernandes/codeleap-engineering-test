import { Dispatch } from "@reduxjs/toolkit"
import { connect } from "react-redux"
import { setUsername } from "../../redux/app/slices/usernameSlice"
import LoginCard from "../LoginCard"

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUsername: (value: string) => dispatch(setUsername(value))
  }
}

export default connect(null, mapDispatchToProps)(LoginCard)

export type ISetUsername = ReturnType<typeof mapDispatchToProps>
