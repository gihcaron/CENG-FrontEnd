
"use client";
import styles from "./styles.module.css";

export default function Profissionais() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}>🚧</div>
                </div>
                <h1 className={styles.title}>Página em Construção</h1>
                <p className={styles.subtitle}>Estamos trabalhando para trazer novidades em breve!</p>
                <div className={styles.loaderWrapper}>
                    <div className={styles.loader}></div>
                </div>
                <div className={styles.additionalInfo}>
                    <p>Em breve você poderá encontrar aqui informações sobre nossos profissionais.</p>
                </div>
        
            <div className={styles.buttonContainer}>
                <a 
                    className={styles.button}
                    href="/home"
                >
                    Voltar para Home
                </a>
                <a 
                    className={styles.button}
                    href="/profissionais"
                >
                    Ver Profissionais
                </a>
            </div>
            </div>
        </div>
    );
}
