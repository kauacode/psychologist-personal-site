import styles from './Hero.module.css';
import fotoPerfil from '../assets/fotoPerfil.jpg'

export function Hero() {
  return (
    <main>
      <div className={styles.heroContainer}>
        <div className={styles.imageContainer}>
          <img src={fotoPerfil} alt="" />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.textContainer}>
            <h1>É possível trilhar um caminho seguro rumo ao equilíbrio emocional, garantindo mais qualidade de vida e menos ansiedade.</h1>
            <p>A busca pelo equilíbrio emocional pode ser desafiadora, mas você não precisa percorrer esse caminho sozinho. A psicoterapia oferece um espaço acolhedor para compreender seus sentimentos, superar dificuldades e desenvolver estratégias para lidar com a ansiedade e outras questões que afetam sua qualidade de vida.
              Com o apoio de um profissional, você poderá fortalecer sua autoconfiança, melhorar seus relacionamentos e aprender a viver de forma mais leve e saudável.  </p>
          </div>
          <button className={styles.contactButton}>Entre em contato!</button>
        </div>
      </div>
    </main>
  )
}