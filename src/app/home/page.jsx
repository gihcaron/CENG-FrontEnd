"use client";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Pagination, Modal, Card, Skeleton } from "antd";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

// Imports
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import CategoriaCard from "../../Components/CategoriaCard";
import FeatureCards from "../../Components/FeatureCards";
import Testimonials from "../../Components/Testimonials";

export default function Home() {
    // Dados

    // Categorias

        const [dataCategorias, setDataCategorias] = useState({
    categorias: [],
    loading: true,
    current: 1,
    pageSize: 3,
  });

      useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const { data : categorias } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/categorias`
        );
        setDataCategorias({ categorias, loading: false, current: 1, pageSize: 3 });
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
        toast.error("Erro ao buscar categorias");
        setDataCategorias((d) => ({ ...d, loading: false }));
      }
    };
    fetchCategorias();
  }, []);

    const paginatedCategorias = () => {
    const start = (dataCategorias.current - 1) * dataCategorias.pageSize;
    return dataCategorias.categorias.slice(start, start + dataCategorias.pageSize);
  };

    // Logos de parcerias

    const partnershipLogos = [
        "/images/CBA.png",
        "/images/F1Academy.png",
        "/images/StockCar.png",
        "/images/F1.png",
        "/images/AMG.png",
        "/images/Indy.png",
    ];

    return (
    <main className={styles.main}>
      <Header />

        <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <p className={styles.title}>
              Conectando as futuras gerações do <span className={styles.highlight}>automobilismo feminino!</span>
          </p>
          <p className={styles.subtitle}>
            Descubra as trajetórias inspiradoras de pilotos, engenheiras e jornalistas 
            que estão revolucionando o mundo do automobilismo brasileiro e internacional.
          </p>
          <button className={styles.ctaButton}>
            Conheça as Profissionais
          </button>
        </div>
        <div className={styles.imageContent}>
          <Image
            src="/images/CarDesign.png"
            alt="Mulher no automobilismo"
            width={600}
            height={400}
            className={styles.heroImage}
            priority
          />

        </div>

      </div>
    </section>

    <div className={styles.Partnership}>
        <div className={styles.logosContainer}>
            {partnershipLogos.map((logo, index) => (
                <div key={index} className={styles.logoBox}>
                    <Image
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        width={180}
                        height={100}
                        className={styles.logoImage}
                        priority
                    />
                </div>
            ))}
        </div>
    </div>
      <FeatureCards />

            <section className={styles.categoriasSection}>
        <p className={styles.categoriasTitle}>Categorias</p>
        <p className={styles.categoriasDescription}>
          Explore as diversas categorias do automobilismo onde nossas
          profissionais atuam!
        </p>
        
        <div className={styles.categoriasList}>
          {paginatedCategorias().map((categoria) => (
            <CategoriaCard
              key={categoria.id}
              categoriaNome={categoria.nome}
              anoInicio={categoria.ano_inicio}
              categoriaDescricao={categoria.descricao}
            />
          ))}
          
        </div>

        <div className={styles.pagination}>
          <Pagination
            current={dataCategorias.current}
            pageSize={dataCategorias.pageSize}
            total={dataCategorias.categorias.length}
            onChange={(page) => setDataCategorias((d) => ({ ...d, current: page }))}
            showSizeChanger={false}
          />
        </div>
      </section>
      
      <Testimonials />
    </main>
    );
}
