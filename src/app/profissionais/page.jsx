"use client";
import axios from "axios";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Pagination, Modal, Card, Skeleton } from "antd";
import styles from "./styles.module.css";

// Imports
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ProfissionalCard from "../../Components/ProfissionalCard";
import CategoriaCard from "../../Components/CategoriaCard";

export default function Profissionais() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCarouselMode, setIsCarouselMode] = useState(false);

  const [data, setData] = useState({
    profissionais: [],
    loading: true,
    current: 1,
    pageSize: 4,
  });

  useEffect(() => {
    const fetchProfissionais = async () => {
      try {
        const { data: profissionais } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/profissionais`
        );
        setData({ profissionais, loading: false, current: 1, pageSize: 4 });
      } catch (error) {
        console.error("Erro ao buscar profissionais:", error);
        toast.error("Erro ao buscar profissionais");
        setData((d) => ({ ...d, loading: false }));
      }
    };
    fetchProfissionais();
  }, []);

  const handleSearch = async () => {
    const nome = search.trim();
    if (nome) {
      try {
        const { data: profissionais } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/profissionais?nome=${nome}`
        );
        setData({ profissionais, loading: false, current: 1, pageSize: 4 });
      } catch (error) {
        console.error("Erro ao buscar profissionais:", error);
        toast.error("Erro ao buscar profissionais");
        setData((d) => ({ ...d, loading: false }));
      }
    }
  };

  const paginatedProfissionais = () => {
    const start = (data.current - 1) * data.pageSize;
    return data.profissionais.slice(start, start + data.pageSize);
  };


  // Importar categorias

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


  return (
    <main className={styles.main}>
      <section className={styles.HeaderSection}>
        <Header />
      </section>

      <section className={styles.bannerSection}>
        <video className={styles.bannerVideo} autoPlay muted loop playsInline>
          <source src="/media/carVideo.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        <div className={styles.gradientDiagonal}></div>
      </section>

      <section className={styles.ProfissionalSection}>
        <div className={styles.bannerContent}>
        <h1 className={styles.bannerTitle}>
          Profissionais que brilham no automobilismo!
        </h1>
        <p className={styles.bannerSubtitle}>
          Explore abaixo uma seleção inspiradora de mulheres que se destacam nas mais diversas áreas do setor automobilístico nacional. 
          Descubra suas trajetórias, conquistas e o impacto que geram no esporte e na indústria. 
          Navegue pela lista, inspire-se com suas histórias e veja como elas estão abrindo caminhos e acelerando mudanças no Brasil.
        </p>
        </div>
        <div className={styles.ImageBanner}>
          <Image
            src="/images/danica-podio.jpg"
            alt="Mulheres no Automobilismo"
            width={500}
            height={300}
            className={styles.Image}
          />
          <Image
            src="/images/iron-dames.jpeg"
            alt="Mulheres no Automobilismo"
            width={500}
            height={300}
            className={styles.Image}
          />
          <Image
            src="/images/wseries.jpg"
            alt="Mulheres no Automobilismo"
            width={500}
            height={300}
            className={styles.Image}
          />


        </div>
      </section>

      <section className={styles.categoriasSection}>
        <p className={styles.title}>Categorias</p>
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

      <section className={styles.profissionaisSection}>
        <p className={styles.title}>Mulheres que inspiram</p>
        <p className={styles.description}>
          Conheça as profissionais que estão fazendo a diferença no
          automobilismo!
        </p>

         <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Pesquisar..."
              className={styles.searchInput}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className={styles.searchButton} onClick={handleSearch}>
              Buscar
            </button>
          </div>

        <div className={styles.cardsContainer}>
          {paginatedProfissionais().map((profissional) => (
            <ProfissionalCard
              key={profissional.id}
              foto={profissional.foto}
              alt={profissional.nome}
              profissional={profissional.nome}
              area_atuacao={profissional.area_atuacao}
              categoria_nome={profissional.categoria_nome}
            />
          ))}
        </div>

        <div className={styles.pagination}>
          <Pagination
            current={data.current}
            pageSize={data.pageSize}
            total={data.profissionais.length}
            onChange={(page) => setData((d) => ({ ...d, current: page }))}
            showSizeChanger={false}
          />
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </section>

      <Footer />
    </main>
  );
}
