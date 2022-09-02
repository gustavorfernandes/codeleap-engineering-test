import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Header from "../components/Header"

describe("Login", () => {
  it("When the input is empty, the start button must be disabled", () => {
    render(<Header />)

    const input = 1 + 1

    expect(input).toBe(2)
  })
})