import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignupForm, { validateEmail } from "../SignupForm";

describe("Signup Form", () => {
  test("render 2 buttons form", () => {
    render(<SignupForm />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
  });

  it("should return failed on invalid email validation", () => {
    const testEmail = "budi.com";
    expect(validateEmail(testEmail)).not.toBe(true);
  });

  test("only accept valid email on Email field", () => {
    render(<SignupForm />);
    const emailField = screen.getByPlaceholderText("Enter email");
    userEvent.type(emailField, "budi");
    expect(emailField.value).not.toMatch("budi@gmail.com");
  });

  test("input field password should have type password", () => {
    render(<SignupForm />);
    const passwordField = screen.getByPlaceholderText("Password");
    expect(passwordField).toHaveAttribute("type", "password");
  });

  // integration
  test("should able to reset form", () => {
    render(<SignupForm />);

    const emailField = screen.getByPlaceholderText("Enter email");
    const passwordField = screen.getByPlaceholderText("Password");
    const resetButton = screen.getByTestId("reset");
    
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();

    userEvent.type(emailField, "budi@gmail.com");
    userEvent.type(passwordField, "passwordku");
    fireEvent.click(resetButton);

    expect(emailField.value).toMatch("");
    expect(passwordField.value).toMatch("");
  });
});
