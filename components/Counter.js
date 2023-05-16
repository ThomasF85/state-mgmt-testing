import { useState } from "react";
import CounterValue from "./CounterValue";
import CounterButtons from "./CounterButtons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
`;

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment(delta) {
    setCount((prev) => prev + delta);
  }

  function decrement(delta) {
    setCount((prev) => (prev - delta < 0 ? 0 : prev - delta));
  }

  return (
    <Container>
      <CounterValue value={count} />
      <CounterButtons delta={1} increment={increment} decrement={decrement} />
      <CounterButtons delta={5} increment={increment} decrement={decrement} />
      <CounterButtons delta={10} increment={increment} decrement={decrement} />
    </Container>
  );
}
