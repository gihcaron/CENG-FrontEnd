"use client";
import React from "react";
import Image from "next/image";
import styles from "./FeatureCards.module.css";

export default function FeatureCards() {
  const features = [
    {
      title: "Perfis Detalhados",
      description: "Conheça as trajetórias de pilotos, engenheiras e jornalistas que fazem a diferença no automobilismo.",
      icon: "👥"
    },
    {
      title: "Categorias do Automobilismo",
      description: "Explore as diferentes categorias com destaque para a presença feminina em cada modalidade.",
      icon: "🏁"
    },
    {
      title: "Entrevistas Exclusivas",
      description: "Acesse episódios de entrevistas com profissionais da área compartilhando suas experiências.",
      icon: "🎤"
    }
  ];



  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.title}>Disponível no  <span className={styles.highlight}>Com Elas No Grid</span></p>
          <p className={styles.subtitle}>Confira abaixo tudo o que você pode encontrar no site!
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.icon}>{feature.icon}</div>
              <p className={styles.featureTitle}>{feature.title}</p>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}