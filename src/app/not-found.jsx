"use client";

import React from "react";
import Link from "next/link";
import styles from "./styles/not-found.module.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function NotFound() {
    return (
        <main>
            <Header />
            <div className={styles.notFoundContainer}>
                <h1 className={styles.notFoundTitle}>404</h1>
                <h2 className={styles.notFoundSubtitle}>Ops! Página não encontrada</h2>
                <p className={styles.notFoundText}>
                    Parece que você acelerou demais e saiu da pista.<br />
                    Volte para o início e continue sua jornada!
                </p>
                <Link href="/home" className={styles.notFoundButton}>
                    Voltar para Home
                </Link>
            </div>
            <Footer />
        </main>
    );
}
