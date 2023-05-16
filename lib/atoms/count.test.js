// The jotai docs encourage you to test the jotai functionality inside your app through component testing: https://jotai.org/docs/guides/testing
// This example shows you a way of testing your jotai atoms in isolation:
import { useSetAtom, useAtomValue } from "jotai";
import { renderHook, act } from "@testing-library/react";
import { countAtom, decrement, increment } from "./count";

beforeEach(async () => {
  const { result: dispatch } = renderHook(() => useSetAtom(countAtom));
  await act(() => dispatch.current(0));
});

test("returns correct default value", () => {
  const { result: value } = renderHook(() => useAtomValue(countAtom));

  expect(value.current).toBe(0);
});

test("increments and decrements correctly", async () => {
  const { result: value } = renderHook(() => useAtomValue(countAtom));
  const { result: dispatch } = renderHook(() => useSetAtom(countAtom));

  await act(() => dispatch.current(increment(42)));
  expect(value.current).toBe(42);

  await act(() => dispatch.current(decrement(15)));
  expect(value.current).toBe(27);
});

test("does not decrement below zero", async () => {
  const { result: value } = renderHook(() => useAtomValue(countAtom));
  const { result: dispatch } = renderHook(() => useSetAtom(countAtom));

  await act(() => dispatch.current(increment(42)));
  expect(value.current).toBe(42);

  await act(() => dispatch.current(decrement(50)));
  expect(value.current).toBe(0);
});
