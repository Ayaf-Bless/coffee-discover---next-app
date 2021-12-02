import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner/Banner";

export default function Home() {
  const handleClickBanner = () => {
    console.log("I click");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>coffee discover</title>
      </Head>
      <Banner
        buttonText={"View nearby store"}
        handleClick={handleClickBanner}
      />
      <main className={styles.main}></main>
    </div>
  );
}
