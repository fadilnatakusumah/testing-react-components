import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header with text `Testing React Components`", () => {
  render(<App />);
  const headerH1 = screen.getByText(/Testing React Components/i);
  expect(headerH1).toBeInTheDocument();
});

test("renders child <SignupForm/> component", () => {
  render(<App />);
  const titleText = screen.getByText("Signup Form");
  expect(titleText).toBeTruthy();
});
