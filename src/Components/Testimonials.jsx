import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.testimonialCard}>
          <div className={styles.quoteIcon}>❝</div>
          <blockquote className={styles.quote}>
            "O automobilismo sempre foi minha paixão, mas encontrar meu espaço neste mundo 
            exigiu determinação e coragem. Cada vitória não é apenas minha, mas de todas as 
            mulheres que sonham em acelerar nesta pista. Queremos inspirar a próxima geração 
            a quebrar barreiras e acelerar seus sonhos."
          </blockquote>
          <div className={styles.author}>
            <div className={styles.authorInfo}>
              <cite className={styles.authorName}>Bia Figueiredo</cite>
              <span className={styles.authorTitle}>Piloto da Copa Truck</span>
            </div>
          </div>
        </div>
        
            <p className={styles.statTitle}> Nossos dados! </p>
        <div className={styles.impactStats}>
          <div className={styles.statItem}>

            <span className={styles.statNumber}>7+</span>
            <span className={styles.statLabel}>Áreas de atuação Representadas</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>30+</span>
            <span className={styles.statLabel}>Profissionais Catalogadas</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>10+</span>
            <span className={styles.statLabel}>Categorias Mapeadas</span>
          </div>
        </div>
      </div>
    </section>
  );
}