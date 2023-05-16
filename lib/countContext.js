import { createContext, useCallback, useMemo, useState } from "react";

export const CountContext = createContext();
export const CountApiContext = createContext();

export function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = useCallback(
    (delta) => setCount((prev) => prev + delta),
    [setCount]
  );

  const decrement = useCallback(
    (delta) => setCount((prev) => (prev - delta < 0 ? 0 : prev - delta)),
    [setCount]
  );

  const api = useMemo(
    () => ({
      increment,
      decrement,
    }),
    [increment, decrement]
  );

  return (
    <CountContext.Provider value={count}>
      <CountApiContext.Provider value={api}>
        {children}
      </CountApiContext.Provider>
    </CountContext.Provider>
  );
}
