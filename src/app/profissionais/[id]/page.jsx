"use client";
import React from "react";
import styles from "./styles.module.css";
// Imports
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

export default function ProfissionaisDetalhes() {
    return (
    <main className={styles.main}>
            <Header />
            <h1>Detalhes do Profissional</h1>
            <Footer />
        </main>
    );
}