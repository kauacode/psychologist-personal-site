import styles from './Hero.module.css';
import fotoPerfil from '../../assets/fotoPerfil.jpg'

import { useState, useEffect } from 'react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 500);
  }, []);
  console.log("Classes aplicadas:", isLoaded ? styles.pageLoaded : "");

  return (
    <main>
      <div className={`${styles.heroContainer} ${isLoaded ? styles.pageLoaded : ""}`}>
        <div className={styles.imageContainer}>
          <img src={fotoPerfil} alt="" />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.textContainer}>
            <h1>É possível alcançar equilíbrio emocional, promovendo qualidade de vida e reduzindo a ansiedade.</h1>
            <p>A busca pelo equilíbrio emocional pode ser desafiadora, mas você não precisa percorrer esse caminho sozinho. A psicoterapia oferece um espaço acolhedor para compreender seus sentimentos, superar dificuldades e desenvolver estratégias para lidar com a ansiedade e outras questões que afetam sua qualidade de vida.
              Com o apoio de um profissional, você poderá fortalecer sua autoconfiança, melhorar seus relacionamentos e aprender a viver de forma mais leve e saudável.  </p>
          </div>
          <a className={styles.contactButton} href="https://api.whatsapp.com/send/?phone=5519996438363&text=Oie%2C+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+a+terapia%21+&type=phone_number&app_absent=0">
            Entre em contato!
          </a>
        </div>
      </div>
    </main>
  )
}