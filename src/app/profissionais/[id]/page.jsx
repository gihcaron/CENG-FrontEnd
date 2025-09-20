"use client";
import React from "react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Card } from "antd";
import { useParams } from "next/navigation";
import Image from "next/image";
import axios from "axios";

// Imports
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

export default function ProfissionaisDetalhes() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [activeTab, setActiveTab] = useState('biografia');

    console.log("ID do profissional:", id);

    useEffect(() => {
        const fetchProfissionais = async () => {
            try {
                const { data: profissional } = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/profissionais/${id}`
                );
                setData(profissional);
            } catch (error) {
                console.error("Erro ao buscar profissionais:", error);
                setData((d) => ({ ...d, loading: false }));
            }
        };
        fetchProfissionais();
    }, []);

    const getFlagEmoji = (pais) => {
        switch (pais?.toLowerCase()) {
            case 'brasil':
            case 'brazil':
                return '🇧🇷';
            case 'estados unidos':
            case 'united states':
            case 'usa':
                return '🇺🇸';
            case 'reino unido':
            case 'united kingdom':
            case 'uk':
                return '🇬🇧';
            case 'frança':
            case 'france':
                return '🇫🇷';
            case 'alemanha':
            case 'germany':
                return '🇩🇪';
            case 'itália':
            case 'italy':
                return '🇮🇹';
            case 'espanha':
            case 'spain':
                return '🇪🇸';
            default:
                return '🌍';
        }
    };


    console.log("Dados do profissional:", data);

    if (!data) {
        return (
            <main className={styles.main}>
                <Header />
                <div className={styles.loading}>Carregando...</div>
                <Footer />
            </main>
        );
    }

    return (
        <main className={styles.main}>
            <Header />

            <div className={styles.containerWrapper}>
                <Card className={styles.profileCard}>
                 
                    <div className={styles.bannerSection}>
                        <div className={styles.bannerGradient}></div>
                        
                     
                        <div className={styles.profilePhotoContainer}>
                            <div className={styles.profilePhotoBorder}>
                                <Image
                                    className={styles.profilePhoto}
                                    src={
                                        data && data.foto &&
                                            data.foto !== "undefined" &&
                                            data.foto !== "null" &&
                                            data.foto.trim() !== ""
                                            ? `http://localhost:3000/${data.foto}`
                                            : "/perfil.jpg"
                                    }
                                    alt={data?.nome || "Foto do profissional"}
                                    width={200}
                                    height={200}
                                    priority={true}
                                />
                            </div>
                        </div>
                    </div>


                                        <div className={styles.mainInfoSection}>
                                            <div className={styles.nameSection}>
                                                <h1 className={styles.professionalName}>{data?.nome}</h1>
                                                {data?.redes_sociais && (
                                                <div className={styles.socialLinks}>
                                                    <svg 
                                                        width="20" 
                                                        height="20" 
                                                        viewBox="0 0 24 24" 
                                                        fill="none" 
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className={styles.socialIcon}
                                                    >
                                                        <path 
                                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" 
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                        <span className={styles.socialText}>{data.redes_sociais}</span>
                                                
                                                </div>
                                                )}
                                            </div>
                                        <div className={styles.locationAgeSection}>
                                            <div className={styles.locationInfo}>
                                                <span className={styles.flagIcon}>{getFlagEmoji(data?.pais)}</span>
                                                <span className={styles.location}>{data?.pais}</span>
                                            </div>

                                            {data?.idade && (
                                                <div className={styles.ageInfo}>
                                                    <span className={styles.age}>| {data.idade} anos</span>
                                                </div>
                                            )}
                                            </div>
                                            <div className={styles.badgesContainer}>
                                                <div className={styles.areaBadge}>
                                                   <p className={styles.areaText}>{data?.area_atuacao}</p>
                                                </div>

                                                <div className={styles.categoryTag}>
                                                    {data?.categoria_nome || data?.categoria || 'Categoria não disponível'}
                                                </div>
                                            </div>
                                        </div>
                                    </Card>

                                    {/* Card 2: Carreira e Biografia */}
                <div className={styles.contentCard}>
                    {/* Navegação por Abas */}
                    <div className={styles.tabsContainer}>
                        <button 
                            className={`${styles.tab} ${activeTab === 'biografia' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('biografia')}
                        >
                            Biografia
                        </button>
                        <button 
                            className={`${styles.tab} ${activeTab === 'carreira' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('carreira')}
                        >
                            Carreira
                        </button>
                    </div>

                    <div className={styles.tabContent}>
                        {activeTab === 'biografia' && (
                            <div className={styles.biographySection}>
                                <h2 className={styles.sectionTitle}>Sobre {data?.nome?.split(' ')[0]}</h2>
                                <p className={styles.biographyText}>
                                    {data?.biografia || "Biografia não disponível no momento."}
                                </p>
                            </div>
                        )}

                        {activeTab === 'carreira' && (
                            <div className={styles.careerSection}>
                                <h2 className={styles.sectionTitle}>Highlights da Carreira</h2>
                                <div className={styles.careerInfo}>
                                    <div className={styles.careerItem}>
                                        <p className={styles.careerItemTitle}>Área de Atuação</p>
                                        <p className={styles.careerItemText}>{data?.area_atuacao}</p>
                                    </div>
                                    <div className={styles.careerItem}>
                                        <p className={styles.careerItemTitle}>Categoria Principal</p>
                                        <p className={styles.careerItemText}>{data?.categoria_nome}</p>
                                    </div>
                                    <div className={styles.careerItem}>
                                        <p className={styles.careerItemTitle}>País de Origem</p>
                                        <p className={styles.careerItemText}>{data?.pais}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}