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
                <Image src="/images/logoCENG.png" alt="Logo" width={200} height={80} />
            </div>
            <nav className={styles.links}>
                <a href="/about">Sobre</a>
                <a href="/contact">Contato</a>
                <a href="/privacy">Privacidade</a>
            </nav>
            <div className={styles.copy}>
                © {new Date().getFullYear()} CENG. Todos os direitos reservados.
            </div>
        </div>
    </footer>   
)
}
