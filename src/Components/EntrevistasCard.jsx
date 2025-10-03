"use client";

import styles from "./EntrevistasCard.module.css";
import Image from "next/image";
import React from "react";

import { Card } from "antd"
import { FaYoutube } from "react-icons/fa";


// Importando componentes


export default function EntrevistasCard({youtubeLink, thumbnail, title, duration, channel, views, date
}) {

    return (

        <Card className={styles.card}
          onClick={() => window.open(youtubeLink, "_blank")}>

            <div className={styles.ImageContainer}>
                <Image
                    src={thumbnail}
                    alt={`Thumbnail do vídeo ${title}`}
                    width={300}
                    height={180}
                    className={styles.Image}
                />
                <span className={styles.duration}>{duration}</span>
            </div>
            <div className={styles.Content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.channel}>{channel}</p>
                <div className={styles.meta}>
                    <div className={styles.IconContainer}>

                        <FaYoutube size={18} className={styles.youtubeIcon} />
                    </div>
                    <div className={styles.metaInfo}>
                        <span> +{views} views</span>
                        <span>{date}</span>
                    </div>
                </div>
            </div>
        </Card>

    );
}
