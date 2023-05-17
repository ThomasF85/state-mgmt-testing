import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 1em;
`;

const Button = styled.button`
  font-size: 1em;
  padding: 0.1em 0.5em;
  border-radius: 0.25em;
  background-color: var(--color-secondary);
  color: white;
`;

export default function CounterButtons({ delta, increment, decrement }) {
  return (
    <Container>
      <Button type="button" onClick={() => decrement(delta)}>
        - {delta}
      </Button>
      <Button
        data-cy={`incbutton${delta}`}
        type="button"
        onClick={() => increment(delta)}
      >
        + {delta}
      </Button>
    </Container>
  );
}
