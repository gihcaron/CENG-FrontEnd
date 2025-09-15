import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styles from './Header.module.css'

export default function Header() {
  const router = useRouter();

  const handleLogoClick = () => {
        router.push('/home');
    };
return (
    <header className={styles.header}>
        <div className={styles.logoRectangular}>
            <Image
                src="/images/logoCENG.png"
                alt="Logo"
                width={190}
                height={70}
                onClick={handleLogoClick}
            />
        </div>

        {/* Menu Desktop */}
        <div className={styles.navigation}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.item}><a href="/home">Home</a></li>
                    <li className={styles.item}><a href="/profissionais">Profissionais</a></li>
                    <li className={styles.item}><a href="/media">Midia</a></li>
                    <div className={styles.contatoContainer}>
                        <li className={styles.sobreNos}><a href="/sobre-nós" className={styles.sobreTitle}>Nos Conheça!</a></li>
                    </div>
                </ul>
            </nav>
        </div>
    </header>
)
}
