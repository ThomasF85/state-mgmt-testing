import { act, renderHook } from "@testing-library/react";
import useStore from "./store";

test("has correct initial count", () => {
  const { result } = renderHook(useStore);

  const count = result.current.count;
  expect(count).toBe(0);
});

test("increments correctly", async () => {
  const { result } = renderHook(useStore);

  await act(async () => {
    result.current.increment(42);
  });

  const count = result.current.count;
  expect(count).toBe(42);
});

test("decrements correctly", async () => {
  const { result } = renderHook(useStore);

  await act(async () => {
    result.current.increment(42);
    result.current.decrement(12);
  });

  const count = result.current.count;
  expect(count).toBe(30);
});

test("does not decrement below zero", async () => {
  const { result } = renderHook(useStore);

  await act(async () => {
    result.current.increment(42);
    result.current.decrement(50);
  });

  const count = result.current.count;
  expect(count).toBe(0);
});
