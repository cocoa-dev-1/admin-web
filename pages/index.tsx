import {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextComponentType,
  NextPage,
} from "next";
import Head from "next/head";
import { ScriptProps } from "next/script";
import { Suspense } from "react";
import Item, { ItemType } from "../components/Item";
import NavBar from "../components/NavBar";
import styles from "../styles/pages/index.module.css";

interface PropsType {
  data: Array<ItemType>;
}

const Home: NextPage<PropsType> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-wrap gap-3 w-7/12 m-auto mt-5">
        {data.map((item, idx) => (
          <Item key={idx} data={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const result = await fetch("http://localhost:3000/api/items");
  const data = await result.json();
  return {
    props: {
      data,
    },
  };
};
