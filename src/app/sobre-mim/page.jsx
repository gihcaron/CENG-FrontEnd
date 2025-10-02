"use client";

import styles from "./styles.module.css";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { Card } from "antd";
import emailjs from "emailjs-com";
import { FaLaptopCode, FaMobileAlt, FaPalette, FaJs, FaCss3Alt, FaHtml5, FaDatabase, FaFigma, FaDownload } from "react-icons/fa";
import { useParams } from "next/navigation";
import Image from "next/image";

// Importar Componentes
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";


export default function SobreMim() {

    // Estados locais para funcionamento do contato
    const [enviado, setEnviado] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_t6excnj',
                'template_sif55yq',
                form.current,
                'tzz9oH30Q5DzDpD8l'
            )
            .then(
                (result) => {
                    alert("Email enviado com sucesso!");
                    setEnviado(true);
                },
                (error) => {
                    alert("Erro ao enviar email: " + error.text);
                }
            );
    };


    // Dados utilizados na página

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
                            onClick={() => window.open("https://github.com/gihcaron", "_blank")}>
                            Conecte-se comigo no GitHub!
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
                <div className={styles.container}>
                    <div className={styles.imageProfile}>
                        <div className={styles.photo}>
                            <Image
                                src="/images/danica-podio.jpg"
                                alt="About Me"
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>

                    <div className={styles.textAboutProject}>
                        <span className={styles.subtitleAboutProject}>— Como nasceu o Com elas no grid? </span>
                        <p className={styles.titleAboutProject}>
                            Quando a tecnologia e automobilismo se encontraram.
                        </p>
                        <p className={styles.descriptionAboutProject}>
                            O Com Elas no Grid surgiu da minha paixão pelo automobilismo e do desejo de dar mais visibilidade às mulheres nesse esporte. Ao competir pela STEM Racing, percebi a falta de representatividade feminina e, como desenvolvedora, criei um espaço para celebrar conquistas e inspirar outras mulheres nas pistas.                        </p>

                        <div className={styles.Infos}>
                            <div className={styles.Info}>
                                <h3>+3 anos</h3>
                                <p> STEM Racing</p>
                            </div>
                            <div className={styles.Info}>
                                <h3>1 ano</h3>
                                <p>PodCast Nitrodelas</p>
                            </div>
                            <div className={styles.Info}>
                                <h3>1 ano</h3>
                                <p>Mentora STEM Racing</p>
                            </div>
                        </div>

                        <div className={styles.buttons}>
                            <button className={styles.projectButton}
                                onClick={() => window.open("https://www.linkedin.com/in/giovanna-caron/", "_blank")}>
                                <p>Faça parte da minha rede!</p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ContactSection}>
                 <div className={styles.contactIntro}>
        <p className={styles.contactTitle}>
          Entre em <span className={styles.highlight}>Contato</span>
        </p>
        <p className={styles.contactSubtitle}>
          Ficarei feliz em responder sua mensagem e conversar sobre novas
          oportunidades, ideias e projetos.
        </p>
      </div>
                <div>
                    {enviado ?
                    
                        (
                            <div className={styles.thankYouMessage}>
                                <Image className={styles.logo}
                                    src="/images/logoCENG.png"
                                    alt="Logo COM ELAS NO GRID"
                                    width={250}
                                    height={100}
                                />
                                <h2>Obrigado por entrar em contato!</h2>
                                <p>Em breve, responderei sua mensagem.</p>
                                <button className={styles.ctaButton} onClick={() => setEnviado(false)}>Enviar outra mensagem</button>
                            </div>
                        ) : (

                            <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
                                <label className={styles.label}>Nome</label>
                                <input type="text" name="name" placeholder="Nome" className={styles.input} required />
                                <label className={styles.label}>Email</label>
                                <input type="email" name="email" placeholder="Email" className={styles.input} required />
                                <label className={styles.label}>Mensagem</label>
                                <textarea name="message" placeholder="Mensagem" className={styles.textarea} required />
                                <button type="submit" value="Send" className={styles.submitButton}>Enviar</button>
                            </form>

                        )}
                </div>

            </section>

            <Footer />
        </main>
    )
}