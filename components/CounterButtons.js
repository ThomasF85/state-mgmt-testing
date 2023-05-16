import styled from "styled-components";
import { useSetAtom } from "jotai";
import { countAtom, decrement, increment } from "@/lib/atoms/count";

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

export default function CounterButtons({ delta }) {
  const dispatch = useSetAtom(countAtom);

  return (
    <Container>
      <Button type="button" onClick={() => dispatch(decrement(delta))}>
        - {delta}
      </Button>
      <Button type="button" onClick={() => dispatch(increment(delta))}>
        + {delta}
      </Button>
    </Container>
  );
}
