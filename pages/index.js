import Counter from "@/components/Counter";
import Head from "next/head";
import styled from "styled-components";

const Main = styled.main`
  text-align: center;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Ultra Counter XXL</title>
      </Head>
      <Main>
        <h1>Ultra Counter XXL</h1>
        <Counter />
      </Main>
    </>
  );
}
