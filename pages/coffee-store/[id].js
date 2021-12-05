import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import styles from "../../styles/cofeeStore.module.css";
import coffeeStore from "../../data/coffee-stores.json";

function Index({ coffeeStore }) {
  const router = useRouter();
  const { id } = router.query;
  if (router.isFallback) {
    return <p>Loadings...</p>;
  }
  const { name, address } = coffeeStore;

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      coffee store number: {id}
      <p>{address}</p>
    </div>
  );
}
export async function getStaticPaths() {
  const paths = coffeeStore.map((el) => {
    return {
      params: {
        id: el.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  console.log(params);
  return {
    props: {
      coffeeStore: coffeeStore.find((el) => {
        return el.id.toString() === params.id;
      }),
    }, // will be passed to the page component as props
  };
}

export default Index;
