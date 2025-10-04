import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styles from './Footer.module.css'

export default function Footer() {
  const router = useRouter();

  const handleLogoClick = () => {
        router.push('/home');
    };
return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.logoSection} onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                <Image src="/images/CENG-Branco.png" alt="Logo" width={200} height={80} />
            </div>
            <nav className={styles.links}>
                <a href="/sobre-mim">Sobre</a>
                <a href="/entrevistas">Entrevistas</a>
                <a href="/profissionais">Profissionais</a>
            </nav>
            <div className={styles.copy}>
                © {new Date().getFullYear()} CENG. Todos os direitos reservados.
            </div>
        </div>
    </footer>   
)
}
