
import CareCard from '@/components/care-card'

type CategoryType = 'Básico' | 'Alimentação' | 'Higiene' | 'Exercícios' | 'Praticidade' | 'Emocional'

export default function CuidadosPage() {
  const cuidados: Array<{
    icon: string
    title: string
    tips: string[]
    category: CategoryType
  }> = [
    {
      icon: "Droplets",
      title: "Manejo da Hidratação",
      tips: [
        "Mantenha hidratação adequada (cerca de 8 copos de líquido por dia)",
        "Evite excesso de líquidos antes de dormir",
        "Distribua a ingestão de líquidos ao longo do dia",
        "Monitore a cor da urina para avaliar hidratação"
      ],
      category: "Básico"
    },
    {
      icon: "Utensils",
      title: "Modificações Dietéticas",
      tips: [
        "Evite irritantes vesicais: cafeína, álcool, alimentos condimentados",
        "Reduza frutas cítricas e adoçantes artificiais",
        "Mantenha um diário alimentar para identificar gatilhos",
        "Consuma fibras adequadas para prevenir constipação"
      ],
      category: "Alimentação"
    },
    {
      icon: "Shield",
      title: "Higiene e Prevenção",
      tips: [
        "Pratique boa higiene íntima, sempre de frente para trás",
        "Use roupas íntimas de algodão",
        "Evite roupas muito apertadas",
        "Urine após relações sexuais para eliminar bactérias"
      ],
      category: "Higiene"
    },
    {
      icon: "Activity",
      title: "Exercícios e Fisioterapia",
      tips: [
        "Pratique exercícios de Kegel para fortalecer músculos pélvicos",
        "Considere fisioterapia pélvica especializada",
        "Mantenha atividade física regular",
        "Faça exercícios respiratórios para relaxamento"
      ],
      category: "Exercícios"
    },
    {
      icon: "MapPin",
      title: "Adaptações Práticas",
      tips: [
        "Mapeie banheiros em lugares que frequenta",
        "Carregue sempre kit de emergência com produtos de higiene",
        "Use aplicativos para localizar banheiros públicos",
        "Planeje viagens cuidadosamente com suprimentos extras"
      ],
      category: "Praticidade"
    },
    {
      icon: "Heart",
      title: "Bem-estar Emocional",
      tips: [
        "Aceite a condição como parte da vida",
        "Mantenha atitude positiva focando no que ainda pode fazer",
        "Estabeleça rotinas previsíveis para reduzir ansiedade",
        "Pratique técnicas de relaxamento como meditação"
      ],
      category: "Emocional"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800">
          Cuidados <span className="text-green-600">Práticos</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Dicas essenciais para o dia a dia e melhor qualidade de vida
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {cuidados?.map((cuidado, index) => (
          <CareCard
            key={index}
            icon={cuidado.icon}
            title={cuidado.title}
            tips={cuidado.tips}
            category={cuidado.category}
          />
        ))}
      </div>

      <div className="bg-yellow-50 rounded-2xl p-8 shadow-lg border border-yellow-200 mb-8">
        <h2 className="text-2xl font-bold text-yellow-800 mb-4 text-center">
          ⚠️ Sinais de Alerta
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-yellow-800 mb-2">Procure ajuda médica imediata se apresentar:</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Febre alta associada a sintomas urinários</li>
              <li>• Dor intensa no abdomen ou costas</li>
              <li>• Sangue na urina</li>
              <li>• Incapacidade total de urinar</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-800 mb-2">Agende consulta se notar:</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Mudanças súbitas nos sintomas</li>
              <li>• Urina com odor muito forte persistente</li>
              <li>• Piora da incontinência ou retenção</li>
              <li>• Sintomas de depressão ou ansiedade intensa</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-green-50 rounded-2xl p-8 shadow-lg border border-green-200">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            💚 Cuidado é um Ato de Amor
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Lembre-se: pequenas adaptações no dia a dia podem fazer uma grande diferença na sua qualidade de vida. 
            Seja paciente consigo mesmo e celebre cada progresso, por menor que seja. Você é mais forte do que imagina.
          </p>
        </div>
      </div>
    </div>
  )
}
