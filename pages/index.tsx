import {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextComponentType,
  NextPage,
} from "next";
import Head from "next/head";
import { ScriptProps } from "next/script";
import { Suspense } from "react";
import NavBar from "../components/NavBar";
import { Item } from "../data/items";
import styles from "../styles/pages/index.module.css";

interface PropsType {
  data: Array<Item>;
}

const Home: NextPage<PropsType> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-wrap gap-4 w-6/12 m-auto mt-5">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col w-50 h-60 bg-blue-100 rounded-md p-5"
          >
            <span>이름: {item.name}</span>
            <span>설명: {item.description}</span>
            <span>카테고리: {item.category}</span>
            <span>가격: {item.price}</span>
          </div>
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
