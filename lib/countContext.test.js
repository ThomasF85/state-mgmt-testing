import { render, screen } from "@testing-library/react";
import { CountApiContext, CountContext, CountProvider } from "./countContext";
import { useContext } from "react";
import userEvent from "@testing-library/user-event";

const TestCountConsumer = () => {
  const count = useContext(CountContext);
  return <p data-testid="count">{count}</p>;
};

const TestAPIConsumer = () => {
  const { increment, decrement } = useContext(CountApiContext);
  return (
    <>
      <button data-testid="increment" onClick={() => increment(5)}>
        inc
      </button>
      <button data-testid="decrement" onClick={() => decrement(5)}>
        dec
      </button>
    </>
  );
};

test("provides correct initial count", () => {
  render(
    <CountProvider>
      <TestCountConsumer />
    </CountProvider>
  );

  const count = screen.getByTestId("count");

  expect(count).toHaveTextContent("0");
});

test("increments and decrements count correctly", async () => {
  render(
    <CountProvider>
      <TestCountConsumer />
      <TestAPIConsumer />
    </CountProvider>
  );

  const count = screen.getByTestId("count");
  const incrementButton = screen.getByTestId("increment");
  const decrementButton = screen.getByTestId("decrement");

  await userEvent.click(incrementButton);
  expect(count).toHaveTextContent("5");

  await userEvent.click(incrementButton);
  expect(count).toHaveTextContent("10");

  await userEvent.click(decrementButton);
  expect(count).toHaveTextContent("5");

  await userEvent.click(decrementButton);
  expect(count).toHaveTextContent("0");

  await userEvent.click(decrementButton);
  expect(count).toHaveTextContent("0");
});
