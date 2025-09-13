"use client";
import Image from "next/image";

import styles from "./styles.module.css";

export default function home() {
    return (
    <main className={styles.main}>
     <section className={styles.BannerSection}>
    <div className={styles.BannerContent}>
        <div  className={styles.BannerText}>
           <h1 className={styles.BannerTitle}>Bem vindos ao 
            <Image 
            src="/images/pistaIcon.png"
            alt="Logo"
            width={100}
            height={100}
            className={styles.BannerIcon}
            />
            </h1>
            <h2 className={styles.BannerSubtitle}>Com ELas No Grid</h2>

            <p className={styles.BannerDescription}>Seu portal de notícias sobre mulheres na tecnologia e no mercado de trabalho.</p>
            <p className={styles.BannerDescription}>Aqui, celebramos as conquistas, desafios e histórias inspiradoras de mulheres que estão moldando o futuro da tecnologia.</p>
            <p className={styles.BannerDescription}>Junte-se a nós nessa jornada de empoderamento e inovação!</p>
        </div>
        <div className={styles.BannerImage}> </div>
    </div>
    
    </section>
    </main>
    );
}
