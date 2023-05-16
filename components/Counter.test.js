import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter.js";

// This is an example test to show how to test the component logic (not a comprehensive test)
test("increments and decrements value correctly", async () => {
  render(<Counter />);

  const value = screen.getByText(/Value/);
  const increment5Button = screen.getByText(/\+ 5/);
  const increment10Button = screen.getByText(/\+ 10/);
  const decrement5Button = screen.getByText(/\- 5/);

  expect(value).toHaveTextContent("Value: 0");

  await userEvent.click(increment5Button);
  expect(value).toHaveTextContent("Value: 5");

  await userEvent.click(increment10Button);
  expect(value).toHaveTextContent("Value: 15");

  await userEvent.click(decrement5Button);
  expect(value).toHaveTextContent("Value: 10");

  await userEvent.click(decrement5Button);
  expect(value).toHaveTextContent("Value: 5");
});
