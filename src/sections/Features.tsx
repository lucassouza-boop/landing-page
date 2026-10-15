import type { ReactNode } from 'react'

type Feature = {
  title: string
  description: string
  icon: ReactNode
}

// TODO: substituir pelos benefícios reais do produto/serviço.
const features: Feature[] = [
  {
    title: 'Resultados rápidos',
    description: 'Comece a ver ganhos já nas primeiras semanas, sem processos complicados.',
    icon: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
  },
  {
    title: 'Segurança e confiança',
    description: 'Seus dados protegidos com as melhores práticas do mercado.',
    icon: <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3z" />,
  },
  {
    title: 'Suporte dedicado',
    description: 'Um time pronto para ajudar sempre que você precisar.',
    icon: (
      <>
        <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
        <rect x="3" y="13" width="4" height="6" rx="1" />
        <rect x="17" y="13" width="4" height="6" rx="1" />
      </>
    ),
  },
  {
    title: 'Sob medida',
    description: 'Soluções adaptadas à realidade e aos objetivos do seu negócio.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
  },
]

function Features() {
  return (
    <section id="beneficios" className="section container">
      <h2 className="section__title">Benefícios</h2>
      <p className="section__subtitle">Por que escolher a gente.</p>

      <ul className="features">
        {features.map((feature) => (
          <li key={feature.title} className="feature-card">
            <svg
              className="feature-card__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {feature.icon}
            </svg>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Features
