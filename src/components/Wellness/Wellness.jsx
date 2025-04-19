import { useState } from 'react'
import styles from './Wellness.module.css'
import Card from '../Cards/Wellness/CardWellness'

import Lendo from '../../assets/fotoLendo.jpg'

export function Wellness() {

  const problems = [
    { title: "Ansiedade", description: "Preocupações excessivas, sensação constante de alerta, dificuldade para relaxar, agitação, pensamentos acelerados e sintomas físicos como aperto no peito, sudorese e insônia são alguns dos sinais mais comuns da ansiedade. Através do acompanhamento psicológico, ajudo você a entender as origens da sua ansiedade, desenvolver estratégias para lidar com os gatilhos e retomar o controle da sua rotina com mais tranquilidade e equilíbrio emocional." },
    { title: "Depressão", description: "A depressão é marcada pela perda de interesse e prazer em atividades, fadiga constante, sentimentos de inutilidade e culpa excessiva, além de dificuldades de concentração e tomada de decisão. Também auxilio pessoas a enfrentarem o isolamento social e a dificuldade em se conectar com os outros, causados pela falta de energia e motivação, mesmo após períodos de descanso. A terapia é um espaço para ressignificar experiências e reencontrar o sentido no cotidiano." },
    { title: "Baixa auto-estima", description: "A baixa autoestima se manifesta por meio de insegurança, autocrítica intensa, medo constante de errar e dificuldade de reconhecer suas próprias qualidades e conquistas. No processo terapêutico, te ajudo a identificar padrões negativos de pensamento, fortalecer sua autoconfiança e construir uma relação mais saudável e gentil com você mesmo(a)." },
    { title: "Tristeza", description: "Sentir tristeza é parte da experiência humana, mas quando ela se torna constante, profunda e difícil de explicar, pode impactar sua motivação, produtividade e bem-estar geral. Com acolhimento e escuta ativa, ofereço suporte para que você possa compreender suas emoções, elaborar possíveis perdas e encontrar novas formas de lidar com os desafios da vida." },
    { title: "Fobia social", description: "A fobia social envolve um medo intenso de ser julgado, observado ou rejeitado em situações sociais, o que muitas vezes leva ao isolamento, insegurança e sofrimento. Na psicoterapia, trabalho junto com você para identificar os pensamentos disfuncionais por trás desses medos, promover maior autoconfiança e desenvolver habilidades sociais para que você se sinta mais seguro em interações interpessoais." },
    { title: "Medo", description: "O medo, embora natural, pode se tornar um bloqueio quando é desproporcional, persistente e interfere nas suas decisões ou qualidade de vida. Pode estar ligado a experiências traumáticas, inseguranças ou situações mal resolvidas. Te ajudo a compreender a origem desse medo e, pouco a pouco, a enfrentá-lo de maneira segura, respeitando seu tempo e construindo caminhos para que ele deixe de controlar suas escolhas." }
  ]

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    if (openIndex === index) {
      // Fecha o mesmo card com delay para permitir animação de fechamento
      setTimeout(() => setOpenIndex(null), 300); // 300ms = tempo do CSS
    } else {
      setOpenIndex(index); // Abre novo imediatamente
    }
  };

  return (
    <main>
      <div className={styles.backgroundContainer}>
        <div className={styles.imageContainer}>
          <img src={Lendo} alt="" />
        </div>
        <div className={styles.cardContainer}>
          <h1>Talvez você esteja sentindo</h1>
          {problems.map((item, index) =>
            <Card 
              key={index} 
              title={item.title} 
              description={item.description}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}           
            />
          )}
        </div>
      </div>
    </main>
  )
}