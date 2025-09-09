"use client";

import styles from "./styles.module.css";

export default function home() {
    return (
        <div className={styles.container}>
            <main className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        Mulheres no <span className={styles.highlight}>Automobilismo</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Descobra as histórias inspiradoras de mulheres que moldaram o automobilismo mundial
                    </p>
                    <p className={styles.description}>
                        Pilotos, engenheiras, jornalistas e profissionais que quebraram barreiras e 
                        abriram caminhos no esporte mais tradicional do mundo.
                    </p>
                    <div className={styles.ctaButtons}>
                        <a className={styles.primaryBtn} href="/profissionais">Explorar Histórias</a>
                        <a className={styles.secondaryBtn} href="/categorias">Conheça as Categorias</a>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <div className={styles.imageCard}>
                        <div className={styles.placeholder}>
                            <span></span>
                        </div>
                    </div>
                </div>
            </main>

            <section className={styles.features}>
                <div className={styles.featureGrid}>
                    <div className={styles.featureCard}>
                        <div className={styles.icon}>👩‍💼</div>
                        <h3>Pilotos Pioneiras</h3>
                        <p>Conheça as mulheres que desafiaram estereótipos nas pistas</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.icon}>⚙️</div>
                        <h3>Engenheiras</h3>
                        <p>Descubra as mentes por trás das inovações tecnológicas</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.icon}>📰</div>
                        <h3>Jornalistas</h3>
                        <p>As vozes que narram e documentam o automobilismo</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
