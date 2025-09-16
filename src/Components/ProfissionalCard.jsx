import React from "react";
import Image from "next/image";
import { Card } from "antd";
import { useRouter } from "next/navigation";
import styles from "./ProfissionalCard.module.css";

export default function ProfissionalCard({ foto, alt, profissional, area_atuacao, categoria_nome }) {
  
  const router = useRouter();

  return (
    <div className={styles.cardsContainer}>
      <Card className={styles.card}>
        <Image
          className={styles.profileImage}
          src={
            foto &&
            foto !== "undefined" &&
            foto !== "null" &&
            foto.trim() !== ""
              ? `http://localhost:3000/${foto}`
              : "/perfil.jpg"
          }
          alt={alt}
          width={160}
          height={160}
          priority={true}
        />

        <p className={styles.nome}>{profissional}</p>

        {area_atuacao && (
          <p className={styles.areaAtuacao}>{area_atuacao}</p>
        )}

        {categoria_nome && (
          <p className={styles.categoria}>{categoria_nome}</p>
        )}
      </Card>
    </div>
  );
}