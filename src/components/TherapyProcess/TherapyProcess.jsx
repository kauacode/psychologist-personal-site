import styles from './TherapyProcess.module.css';

export function TherapyProcess() {
  const steps = [
    {
      title: 'Avaliação',
      description:
        'Nas primeiras sessões fazemos uma avaliação para identificar os problemas e sintomas, que irá auxiliar na compreensão dos pensamentos, comportamentos e emoções do paciente, além da realização de um diagnóstico se necessário.'
    },
    {
      title: 'Plano de tratamento',
      description:
        'Através da avaliação é elaborado um plano de tratamento, alinhado com as expectativas do paciente e melhores evidências científicas disponíveis.'
    },
    {
      title: 'Aplicação de técnicas',
      description:
        'Nesta etapa, iremos trabalhar nos objetivos estabelecidos anteriormente, desenvolvendo novos repertórios de pensamento e comportamento, a fim de trazer mais qualidade de vida para o paciente.'
    },
    {
      title: 'Alta da terapia',
      description:
        'Meu objetivo é tornar você o seu próprio terapeuta, sendo capaz de identificar e manejar a si mesmo em nível cognitivo, emocional e comportamental de forma eficaz. Quando isso estiver estabelecido e os objetivos terapêuticos alcançados, é realizada a alta do paciente.'
    }
  ];

  return (
    <main className={styles.backgroundWrapper}>
      <h2>Como funciona o processo?</h2>
      <ol className={styles.timeline}>
        {steps.map((step, index) => (
          <li key={index}>
            <div className={styles.circle}></div>
            <div className={styles.content}>
              <h3>{index + 1}. {step.title}</h3>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
