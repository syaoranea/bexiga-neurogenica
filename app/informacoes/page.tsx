
import InformationCard from '@/components/information-card'

export default function InformacoesPage() {
  const informacoes = [
    {
      icon: "Heart",
      title: "O que é Bexiga Neurogênica?",
      content: "A bexiga neurogênica é uma condição médica que resulta da perda do controle normal da bexiga devido a problemas no sistema nervoso. Quando há lesões ou doenças que afetam o cérebro, a medula espinhal ou os nervos periféricos responsáveis pelo controle da bexiga, essa coordenação é perdida."
    },
    {
      icon: "Brain",
      title: "Principais Causas",
      content: "As principais causas incluem lesões da medula espinhal, espinha bífida, esclerose múltipla, acidente vascular cerebral, doença de Parkinson, diabetes mellitus, tumores do sistema nervoso e traumatismos cranianos. Pode ser congênita (desde o nascimento) ou adquirida."
    },
    {
      icon: "AlertTriangle",
      title: "Tipos de Bexiga Neurogênica",
      content: "Existem três tipos principais: Bexiga Flácida (dificuldade para esvaziar), Bexiga Espástica (contrações involuntárias e urgência), e Bexiga Mista (combinação de ambos os tipos). Cada tipo apresenta sintomas específicos."
    },
    {
      icon: "Stethoscope",
      title: "Sintomas Comuns",
      content: "Incontinência urinária, retenção urinária, urgência miccional, frequência aumentada, necessidade de acordar à noite para urinar, jato urinário fraco, sensação de esvaziamento incompleto, e em alguns casos, disfunção sexual."
    },
    {
      icon: "Users",
      title: "Impacto na Qualidade de Vida",
      content: "A condição pode afetar significativamente aspectos psicológicos (ansiedade, depressão), sociais (isolamento, dificuldades no trabalho) e familiares (sobrecarga do cuidador, tensões). O apoio multidisciplinar é fundamental."
    },
    {
      icon: "Lightbulb",
      title: "Importância do Diagnóstico Precoce",
      content: "O diagnóstico precoce e o início imediato do tratamento são cruciais para prevenir complicações graves, como danos renais irreversíveis. Procure sempre orientação médica especializada para avaliação adequada."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800">
          Informações sobre <span className="text-green-600">Bexiga Neurogênica</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Compreenda melhor essa condição com informações médicas confiáveis e acessíveis
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {informacoes?.map((info, index) => (
          <InformationCard
            key={index}
            icon={info.icon}
            title={info.title}
            content={info.content}
          />
        ))}
      </div>

      <div className="bg-blue-50 rounded-2xl p-8 shadow-lg border border-blue-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Lembre-se: Você não está sozinho
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Cada caso é único e requer tratamento personalizado. Com o acompanhamento médico adequado 
            e estratégias de adaptação apropriadas, é possível manter uma qualidade de vida satisfatória. 
            O suporte familiar e profissional são elementos essenciais no manejo da condição.
          </p>
        </div>
      </div>
    </div>
  )
}
