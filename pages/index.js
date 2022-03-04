import Head from "next/head";

import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import styles from "../styles/Home.module.css";
import coffeeStore from "../data/coffee-stores.json";
import {createApi} from "unsplash-js";

export default function Home(props) {
  const handleClickBanner = () => {
    console.log("I click");
  };
  return (
    <div>
      <Head>
        <title>coffee discover</title>
      </Head>
      <Banner
        buttonText={"View nearby store"}
        handleClick={handleClickBanner}
      />
      <main>
        {props.coffeeStore.length > 0 && (
          <div>
            <h2 className={styles.h2}>Kampala coffee</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStore.map((data) => {
                return (
                  <Card
                    key={data.id}
                    name={data.name}
                    href={`/coffee-store/${data.id}`}
                    imgUrl={data.imgUrl}
                  />
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
    const unsplash = createApi({
        accessKey: process.env.UNSPLASH_ACCESS_KEY
    });
  return {
    props: { coffeeStore }, // will be passed to the page component as props
  };
}
