import { act, renderHook } from "@testing-library/react";
import useStore from "./store";

test("has correct initial count", () => {
  const { result } = renderHook(useStore);

  const count = result.current.count;
  expect(count).toBe(0);
});

test("increments correctly", () => {
  const { result } = renderHook(useStore);

  act(() => {
    result.current.increment(42);
  });

  const count = result.current.count;
  expect(count).toBe(42);
});

test("decrements correctly", () => {
  const { result } = renderHook(useStore);

  act(() => {
    result.current.increment(42);
    result.current.decrement(12);
  });

  const count = result.current.count;
  expect(count).toBe(30);
});

test("does not decrement below zero", () => {
  const { result } = renderHook(useStore);

  act(() => {
    result.current.increment(42);
    result.current.decrement(50);
  });

  const count = result.current.count;
  expect(count).toBe(0);
});
