import styles from './Benefits.module.css'
import CardBenefits from '../Cards/Benefits/CardBenefits'

export function Benefits() {
  const benefits = [
    {
      title: "Autoconhecimento e desenvolvimento pessoal", description: "Ajuda a entender melhor seus pensamentos, emoções e comportamentos, promovendo crescimento pessoal"
    },
    {
      title: "Tratamento de doenças mentais como ansiedade e depressão", description: "Através de tratamentos comprovados e seguros adaptados as suas necessidades individuais"
    },
    {
      title: "Melhoria nos relacionamentos", description: "Favorece a comunicação, imposição de limites e vínculos emocionais "
    },
    {
      title: "Desenvolvimento de estratégias para lidar com desafios", description: "Fornece ferramentas para enfrentar dificuldades emocionais, tomar decisões com mais segurança"
    },
    {
      title: "Aprimoramento do equilíbrio emocional", description: "Ajuda a regular as emoções, evitando reações impulsivas e promovendo uma vida mais leve e saudável."
    },
    {
      title: "Aumento da autoestima e da autoconfiança", description: "Trabalha crenças limitantes e inseguranças, tendo mais autonomia"
    },
  ]
  return (
    <section className={styles.benefitsContainer}>
      <h1 className={styles.titleContainer}>
        Benefícios da psicoterapia:
      </h1>
      <h2 className={styles.subtitleContainer}>
        A psicoterapia oferece inúmeros benefícios para a saúde mental e emocional. <br></br> Alguns dos principais são:
      </h2>
      <div className={styles.cardsWrapper}>
        {benefits.map((benefit, index) =>
          <CardBenefits 
            key={index}
            title={benefit.title}
            description={benefit.description}
          />
        )}
      </div>
    </section>
  )
}
