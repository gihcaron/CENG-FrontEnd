"use client";

import styles from "./styles.module.css";
import Image from "next/image";
import React from "react";

import { Card } from "antd";
import { FaYoutube } from "react-icons/fa";

// Importando componentes
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import EntrevistasCard from "../../Components/EntrevistasCard";

export default function Entrevistas() {
    const NitroEntrevista = [
 {
    youtubeLink: "https://www.youtube.com/watch?v=bxNfgU2cyLA&t=1s",
    thumbnail: "https://img.youtube.com/vi/bxNfgU2cyLA/hqdefault.jpg",
    title: "Entrevista Carol Nunes",
    channel: "Canal NitroNeedles",
    duration: "51:12",     
    views: "70",           
    date: "19/02/2025",   
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=yHJZBYQnXOI&t=1230s",
    thumbnail: "https://img.youtube.com/vi/yHJZBYQnXOI/hqdefault.jpg",
    title: "Entrevista Rachel Loh",
    channel: "Canal NitroNeedles",
    duration: "46:44",
    views: "60",
    date: "4/12/2024",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=d2dlVqsi90A&t=1s",
    thumbnail: "https://img.youtube.com/vi/d2dlVqsi90A/hqdefault.jpg",
    title: "Entrevista Livia Maria",
    channel: "Canal NitroNeedles",
    duration: "49:36",
    views: "50",
    date: "10/04/2024",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=bxZmtrmuDS0&t=288s",
    thumbnail: "https://img.youtube.com/vi/bxZmtrmuDS0/hqdefault.jpg",
    title: "Entrevista Episódio bxZmtrmuDS0",
    channel: "Canal NitroNeedles",
    duration: "52:06",
    views: "40",
    date: "15/07/2025",
  },

    ];

  const ENPVideo = [
   {
    youtubeLink: "https://www.youtube.com/watch?v=lJa1IwYqv0M",
    thumbnail: "https://img.youtube.com/vi/lJa1IwYqv0M/hqdefault.jpg",
    title: "LAURA VILLARS É PRIMEIRA MULHER PARA PRESIDÊNCIA DA FIA",
    channel: "Elas Na Pista",
    duration: "43:22",
    views: "170",       
    date: "28/08/2025", 
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=DwKPv0Ph8Fs",
    thumbnail: "https://img.youtube.com/vi/DwKPv0Ph8Fs/hqdefault.jpg",
    title: "KATHERINE LEGGE QUASE CORREU NA F1s",
    channel: "Elas Na Pista",
    duration: "37:15",
    views: "300",
    date: "dd/mm/yyyy",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=SdCc_rpA3vI",
    thumbnail: "https://img.youtube.com/vi/SdCc_rpA3vI/hqdefault.jpg",
    title: "RELEMBRE A IRON DAMES NO BRASIL EM 2024",
    channel: "Elas Na Pista",
    duration: "48:10",
    views: "100",
    date: "18/09/2025",
  },
  {
    youtubeLink: "https://www.youtube.com/watch?v=JPA9R-0SdyY",
    thumbnail: "https://img.youtube.com/vi/JPA9R-0SdyY/hqdefault.jpg",
    title: "MARI BECKER FALA SOBRE SER INSPIRAÇÃO PARA MULHERES ",
    channel: "Elas Na Pista",
    duration: "51:05",
    views: "150",        // preencher depois
    date: "28/05/2025", // preencher depois
  },
  ];
const VideoExtra = [
    {
        youtubeLink: "https://www.youtube.com/watch?v=uudCdhD8ao8",
        thumbnail: "https://img.youtube.com/vi/uudCdhD8ao8/hqdefault.jpg",
        title: "Mulheres no Automobilismo, com Bruna Frazão, membro da Comissão Feminina de Automobilismo #8",
        channel: "Fórmula Ela",
        duration: "42:17",
        views: "1.250",
        date: "12/03/2025",
    },
    {
        youtubeLink: "https://www.youtube.com/watch?v=p7dO_Xbo3xs",
        thumbnail: "https://img.youtube.com/vi/p7dO_Xbo3xs/hqdefault.jpg",
        title: "Girls On Track: por mais mulheres no automobilismo | KS1951",
        channel: "Poscast",
        duration: "6:54",
        views: "947",
        date: "22/07/2024",
    },
    {
        youtubeLink: "https://www.youtube.com/watch?v=-E097mGDdLE",
        thumbnail: "https://img.youtube.com/vi/-E097mGDdLE/hqdefault.jpg",
        title: "BIA FIGUEIREDO FALA DA CARREIRA NA INDY, CHANCE NA F1 E A DECISÃO DE ENGRAVIDAR",
        channel: "Podcast",
        duration: "Podcast",
        views: "2.340",
        date: "05/11/2024",
    },
    {
        youtubeLink: "https://www.youtube.com/watch?v=jAVvOqTvanw",
        thumbnail: "https://img.youtube.com/vi/jAVvOqTvanw/hqdefault.jpg",
        title: "Como as mulheres ganharam espaço no automobilismo",
        channel: "Podcast",
        duration: "33:29",
        views: "1.780",
        date: "18/01/2025",
    },
]
    return (
        <main className={styles.main}>
            <Header />
            <section className={styles.EntrevistasSection}>

                <div className={styles.TitleContainer}>
                    <h1 className={styles.Title}>Entrevistas Canal Nitro</h1>
                    <p clasName={styles.Subtitle}> Veja Mais</p>
                </div>

                <div className={styles.CardContainer}>
                    {NitroEntrevista.map((video, index) => (
                        <EntrevistasCard
                            key={index}
                            youtubeLink={video.youtubeLink}
                            thumbnail={video.thumbnail}
                            title={video.title}
                            duration={video.duration}
                            channel={video.channel}
                            views={video.views}
                            date={video.date}
                        />
                    ))}
                </div>
            </section>
            
            <section className={styles.EntrevistasSection}>

                <div className={styles.TitleContainer}>
                    <h1 className={styles.Title}>Conteúdo Elas Na Pista</h1>
                    <p className={styles.Subtitle}> Veja Mais</p>
                </div>

                <div className={styles.CardContainer}>
                    {ENPVideo.map((video, index) => (
                        <EntrevistasCard
                            key={index}
                            youtubeLink={video.youtubeLink}
                            thumbnail={video.thumbnail}
                            title={video.title}
                            duration={video.duration}
                            channel={video.channel}
                            views={video.views}
                            date={video.date}
                        />
                    ))}
                </div>
            </section>

            <section className={styles.EntrevistasSection}>

                <div className={styles.TitleContainer}>
                    <h1 className={styles.Title}>Conteúdos Diversos</h1>
                    <p className={styles.Subtitle}> Veja Mais</p>
                </div>

                <div className={styles.CardContainer}>
                    {VideoExtra.map((video, index) => (
                        <EntrevistasCard
                            key={index}
                            youtubeLink={video.youtubeLink}
                            thumbnail={video.thumbnail}
                            title={video.title}
                            duration={video.duration}
                            channel={video.channel}
                            views={video.views}
                            date={video.date}
                        />
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
}
