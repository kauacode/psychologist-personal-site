import styles from './Wellness.module.css'
import Card from '../Card/Card'

export function Wellness() {
  const problems = [
    { title: "Ansiedade", description: "Descricao ansiedade" },
    { title: "Depressão", description: "Descricao depressão" },
    { title: "Baixa auto-estima", description: "Descricao Baixa auto-estima" },
    { title: "Tristeza", description: "Descricao tristeza" },
    { title: "Fobia social", description: "Descricao Fobia social" },
    { title: "Medo", description: "Descricao Medo" }
  ]

  return (
    <main>
      <div className={styles.backgroundContainer}>
        <h2>Talvez você esteja sentindo</h2>
        <div className={styles.cardContainer}>
          {problems.map((item, index) =>
            <Card key={index} title={item.title} description={item.description} />
          )}
        </div>
      </div>
    </main>
  )
}