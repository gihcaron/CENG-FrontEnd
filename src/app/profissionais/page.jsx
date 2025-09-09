"use client";
import axios from "axios";
import { ToastContainer, toast} from "react-toastify";
import { useEffect, useState } from "react";
import {Pagination, Modal, Card, Skeleton } from "antd";
import styles from "./styles.module.css";

export default function Profissionais() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
    
 const [data, setData] = useState({
        profissionais: [], 
        loading: true,
        current: 1,
        pageSize:0 
    });

    useEffect (() => {
        const fetchProfissionais = async () => {
            try{
                const { data : profissionais} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/profissionais`,
                );
                setData({profissionais, loading: false, current: 1, pageSize: 5});
            }
            catch(error){
                console.error("Erro ao buscar profissionais:", error);
                toast.error("Erro ao buscar profissionais");
                setData((d) => ({...d, loading: false}));
            }
        };
        fetchProfissionais();

},[]);

const paginatedProfissionais = () => {
    const start = (data.current - 1) * data.pageSize;
    return data.profissionais.slice(start, start + data.pageSize);
};

    
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Profissionais</h1>

            <div className={styles.cardsContainer}>
                {paginatedProfissionais().map((profissional) => (
                    <Card key={profissional.id} className={styles.card}>
                        <p className={styles.nome}>{profissional.nome}</p>
                        {
                            profissional.idade && <p className={styles.idade}>{profissional.idade} anos</p>
                        }
                        <p className={styles.biografia}>{profissional.biografia}</p>
                        <p className={styles.redesSociais}>{profissional.redes_sociais}</p>
                        {
                            profissional.area_atuacao && 
                            <p className={styles.areaAtuacao}>{profissional.area_atuacao}</p>
                        }
                        <p className={styles.pais}>{profissional.pais}</p>
                        {
                            profissional.categoria_nome && 
                        <p className={styles.categoria}>{profissional.categoria_nome}</p>
                        }
                    </Card>
                ))}
            </div>
                    <div className={styles.pagination}>
                        <Pagination
                            current={data.current}
                            pageSize={data.pageSize}
                            total={data.profissionais.length}
                            onChange={(page) => setData((d) => ({...d, current: page}))}
                            showSizeChanger={false}
                        />
                    </div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </main>
    );
}
