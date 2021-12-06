import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/cofeeStore.module.css";
import coffeeStore from "../../data/coffee-stores.json";
import Button from "../../components/Button/Button";

function Index({ coffeeStore }) {
  const router = useRouter();
  const { id } = router.query;
  if (router.isFallback) {
    return <p>Loadings...</p>;
  }
  const { name, address, imgUrl, neighbourhood, websiteUrl } = coffeeStore;

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <Link href={"/"}>
          <a className={styles.back}>Back to home</a>
        </Link>
        <div>
          <Image src={imgUrl} alt={name} width={300} height={300} />
          <div>
            <h2 className={styles.h2}>{name}</h2>
            <p className={styles.para}>{websiteUrl}</p>
            <p className={styles.para}>{address}</p>
            <Button
              styleButton={"secondary"}
              handler={() => console.log("up vote")}
            >
              Up vote
            </Button>
          </div>
        </div>
      </div>
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
  return {
    props: {
      coffeeStore: coffeeStore.find((el) => {
        return el.id.toString() === params.id;
      }),
    }, // will be passed to the page component as props
  };
}

export default Index;
