import styled from "styled-components";

const Value = styled.p`
  background-color: var(--color-primary);
  font-size: 1.2em;
  font-weight: 700;
  width: 5em;
  height: 5em;
  line-height: 5em;
  border-radius: 50%;
`;

export default function CounterValue({ value }) {
  return <Value>Value: {value}</Value>;
}
