import React from 'react'
import Image from 'next/image'
import { Card } from 'antd'
import { useRouter } from 'next/navigation'
import styles from './CategoriaCard.module.css'

export default function CategoriaCard({ categoriaNome, anoInicio, categoriaDescricao }) {

    return (
        <div className={styles.categoriasList}>
            <Card className={styles.categoriaCard}>
                <h1 className={styles.categoriaNome}>{categoriaNome}</h1>
                <p className={styles.categoriaAno}>{anoInicio}</p>
                <p className={styles.categoriaDescricao}>{categoriaDescricao}</p>
            </Card>

        </div>
    )
}
