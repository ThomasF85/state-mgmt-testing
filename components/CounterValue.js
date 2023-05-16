import styled from "styled-components";

const Value = styled.p`
  background-color: var(--color-primary);
  font-size: 1.2em;
  font-weight: 700;
  width: 2em;
  height: 2em;
  line-height: 2em;
  border-radius: 50%;
`;

export default function CounterValue({ value }) {
  return <Value>{value}</Value>;
}
