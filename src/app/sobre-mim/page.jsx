"use client";

import styles from "./styles.module.css";
import React from "react";
import { useEffect, useState } from "react";
import { Card } from "antd";
import { FaLaptopCode, FaMobileAlt, FaPalette, FaJs, FaCss3Alt, FaHtml5, FaDatabase, FaFigma, FaDownload} from "react-icons/fa";
import { useParams } from "next/navigation";
import Image from "next/image";

// Importar Componentes
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";


export default function SobreMim() {

    const abilities = [
        { name: "HTML", percent: "50%", icon: <FaHtml5 size={40} color="#e6007e" /> },
        { name: "CSS", percent: "970%", icon: <FaCss3Alt size={40} color="#e6007e" /> },
        { name: "JavaScript", percent: "98%", icon: <FaJs size={40} color="#e6007e" /> },
        { name: "React", percent: "90%", icon: <FaLaptopCode size={40} color="#e6007e" /> },
        { name: "SQL", percent: "98%", icon: <FaDatabase size={40} color="#e6007e" /> },
        { name: "Figma", percent: "96%", icon: <FaFigma size={40} color="#e6007e" /> },
    ];

    const project = [
        {
            title: "Bora Viajar",
            desc: "Uma rede social para viajantes, onde os usuários podem compartilhar suas experiências de viagem, fotos e dicas com outros entusiastas de viagens.",
            icon: <FaPalette size={30} color="#e6007e" />,
            project: "https://github.com/gihcaron/Bora-Viajar-Web"
        },
        {
            title: "API Disney",
            desc: "Um projeto para todos os fãs da Disney, na qual consome a API da Disney exibindo personagens e filmes.",
            icon: <FaMobileAlt size={30} color="#e6007e" />,
            project: "https://disney-front-project.vercel.app/"
        },
        {
            title: "Portal de Materias",
            desc: "Um projeto educacional que visa facilitar o acesso a materiais de estudo e recursos para alunos.",
            icon: <FaLaptopCode size={30} color="#e6007e" />,
            project: "https://github.com/luschettini/site-portaleducacional"
        },
    ]



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
                            Sou uma <span className={styles.highlight}>Estudante de Análise e Desenvolvimento de Sistemas </span> do SENAI Valinhos e também uma <span className={styles.highlight}>entusiasta por automobilismo</span>. Tenho 17 anos e sou paixonada por tecnologia, sempre busco novas oportunidades para crescer profissionalmente.
                        </p>
                        <button className={styles.ctaButton}
                            onClick={() => window.open("https://www.linkedin.com/in/giovanna-caron/", "_blank")}>
                            Conecte-se comigo!
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
                            {index !== abilities.length - 1 && <span className={styles.separator}>✦</span>}

                        </div>
                    ))}
                </div>
                <div className={styles.dividerLine}></div>
            </div>

            <section className={styles.servicesSection}>
                <div className={styles.header}>
                    <p className={styles.serviceTitle}>
                        Projetos Recentes
                    </p>
                    <button className={styles.ctaButton} onClick={() => window.open("https://github.com/gihcaron", "_blank")}>Veja todos os projetos</button>
                </div>

                <div className={styles.cardsGrid}>
                    {project.map((project, index) => (
                        <Card key={index} className={styles.projectCard}>
                            <div className={styles.icon}>{project.icon}</div>
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <a href={project.project} className={styles.learnMore}>
                                Veja mais →
                            </a>
                        </Card>
                    ))}
                </div>
            </section>

            <section className={styles.toolsSection}>
                <div className={styles.toolHeader}>
                    <span className={styles.toolSubtitle}>Minhas Ferramentas Mais utilizadas</span>
                </div>

                <div className={styles.toolsGrid}>
                    {abilities.map((ability, index) => (
                        <div key={index} className={styles.toolCard}>
                            <div className={styles.toolIcon}>{ability.icon}</div>
                            <p className={styles.percent}>{ability.percent}</p>
                            <span className={styles.toolName}>{ability.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.aboutProjectSection}>
                <div className={styles.aboutContainer}>
                    <div className={styles.imageContainer}>
                        <div className={styles.photo}>
                            <Image
                                src="/images/about-project.png"
                                alt="Sobre o Projeto"
                                width={600}
                                height={400}
                                className={styles.aboutImage}
                                priority
                            />
                        </div>
                        <div className={styles.textContent}>
                            <span className={styles.subtitle}>— Quando a tecnologia encontra o MotorSport</span>
                            <h2>
                                Conheça o <span className={styles.highlight}>Com elas no Grid</span>
                            </h2>
                            <p>
                             Além de desenvolvedora, participei de projetos voltado ao automonilismo, como o STEM Racing. Através do "Com Elas no Grid", meu objetivo é destacar e celebrar as conquistas das mulheres no automobilismo, promovendo a diversidade e a inclusão nesse esporte emocionante.
                            </p>

                            <div className={styles.buttons}>
                                <button className={styles.cta}>
                                    <FaDownload /> Download CV
                                </button>
                                <span className={styles.signature}>Giovanna Caron</span>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

            <Footer />
        </main>
    )
}