import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css";

function Card({ name, imgUrl, href }) {
  return (
    <div className={styles.container}>
      <Link href={href}>
        <a className={styles.item}>
          <h2 className={styles.h2}>{name}</h2>
          <div className={styles.img}>
            <Image src={imgUrl} width={260} height={160} alt={name} />
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Card;
