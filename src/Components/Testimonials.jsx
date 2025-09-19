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
              <span className={styles.authorTitle}>Piloto de Stock Car</span>
            </div>
          </div>
        </div>
        
        <div className={styles.impactStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>15+</span>
            <span className={styles.statLabel}>Países Representados</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>200+</span>
            <span className={styles.statLabel}>Profissionais Catalogadas</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Categorias Mapeadas</span>
          </div>
        </div>
      </div>
    </section>
  );
}