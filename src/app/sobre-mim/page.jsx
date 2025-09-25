"use client";

import styles from "./styles.module.css";
import React from "react";
import { useEffect, useState } from "react";
import { Card } from "antd";
import { useParams } from "next/navigation";
import Image from "next/image";

// Importar Componentes
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";


export default function SobreMim() {

    const abilities = [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Node.js", level: 70 },
    ];

    return (
        <main className={styles.mainContainer}>
            <Header />

            <section className={styles.HeroContainer}>

                <div className={styles.heroContent}>
                    <div className={styles.textContent}>
                        <div className={styles.helloText}>
                            <p>Olá, eu sou a </p>
                        </div>
                        <p className={styles.title}>
                            <span className={styles.highlightTitle}>Giovanna Caron,</span> desenvolvedora de sistemas.
                        </p>
                        <p className={styles.subtitle}>
                            Sou uma <span className={styles.highlight}>Estudante de Análise e Desenvolvimento de Sistemas </span> do SENAI Valinhos e também uma <span className={styles.highlight}>entusiasta por automobilismo</span>. Apaixonada por tecnologia, sempre busco novas oportunidades para crescer profissionalmente.
                        </p>
                        <button className={styles.ctaButton}>
                            Veja Meus Projetos!
                        </button>
                    </div>
                    <div className={styles.imageContent}>
                         <Image
                            src="/images/HomeImage.png"
                            alt="Mulher no automobilismo"
                            width={600}
                            height={400}
                            className={styles.heroImage}
                            priority
                        /> 

                    </div>

                </div>
                
                
            </section>
            <div className={styles.divider}>
                    <div className={styles.dividerContent}>
                        {abilities.map((ability, index) => (
                            <div key={index} className={styles.ability}>
                                <span className={styles.abilityName}>{ability.name}</span>
                                </div>
                        ))}
                    </div>
                    <div className={styles.dividerLine}></div>
                </div>



            <Footer />
        </main>
    )
}