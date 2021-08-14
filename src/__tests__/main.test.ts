import { helloWorld } from "../main"

test("helloWorld returns a string", () => {
  expect(helloWorld()).toEqual("hello world")
})
