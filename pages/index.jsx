import Head from "next/head";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import styles from "../styles/Home.module.css";

const Containing = styled.div`
  background-color: blue;
  & p:hover {
    ${tw`bg-red-500 transition-all rounded-3xl p-2`}
  }
`;

export default function Home() {
  return (
    <Containing>
      <div className={styles.container}>
        <p>Trying</p>
        <p>Crying</p>
        <p>Sighying</p>
        <p>Dying</p>
      </div>
    </Containing>
  );
}
