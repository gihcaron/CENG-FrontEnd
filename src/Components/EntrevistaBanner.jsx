"use client";
import React from "react";
import Image from "next/image";
import styles from "./EntrevistaBanner.module.css";

export default function EntrevistaBanner() {
  return (
 <section className={styles.banner}>
      <div className={styles.overlay}></div>
      <Image
        src="/images/EntrevistaBanner.jpg" 
        alt="Banner"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className={styles.content}>
        <h2 className={styles.title}>F1 Academy </h2>
        <p className={styles.details}>12+ • 7 episódios • 2025</p>
        <p className={styles.text}>
         Quinze jovens pilotas rompem barreiras em um dos esportes mais exigentes do mundo na tentativa de levar uma mulher de volta ao grid da Fórmula 1.
        </p>
        <button className={styles.button} onClick={() => window.open("https://www.netflix.com/br/title/81722244", "_blank")}>▶ Explore mais</button>
      </div>
    </section>
  );
}