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
  return (
    <Container>
      <CounterValue />
      <CounterButtons delta={1} />
      <CounterButtons delta={5} />
      <CounterButtons delta={10} />
    </Container>
  );
}
