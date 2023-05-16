import styled from "styled-components";
import { useAtomValue } from "jotai";
import { countAtom } from "@/lib/atoms/count";

const Value = styled.p`
  background-color: var(--color-primary);
  font-size: 1.2em;
  font-weight: 700;
  width: 5em;
  height: 5em;
  line-height: 5em;
  border-radius: 50%;
`;

export default function CounterValue() {
  const value = useAtomValue(countAtom);

  return <Value>Value: {value}</Value>;
}
