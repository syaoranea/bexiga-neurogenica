
import TreatmentCard from '@/components/treatment-card'

type TreatmentCategoryType = 'Conservador' | 'Farmacológico' | 'Minimamente Invasivo' | 'Cirúrgico'

export default function TratamentosPage() {
  const tratamentos: Array<{
    icon: string
    title: string
    description: string
    details: string[]
    category: TreatmentCategoryType
  }> = [
    {
      icon: "Activity",
      title: "Cateterismo Intermitente Limpo",
      description: "Considerado o padrão-ouro para muitos casos",
      details: [
        "Inserção de cateter através da uretra várias vezes ao dia",
        "Esvazia completamente a bexiga",
        "Menor risco de infecções que o cateterismo contínuo",
        "Técnica que pode ser aprendida pelo paciente ou cuidador"
      ],
      category: "Conservador"
    },
    {
      icon: "Heart",
      title: "Treinamento Vesical",
      description: "Técnicas estruturadas para melhorar o controle",
      details: [
        "Esvaziamento programado em intervalos regulares",
        "Técnicas de 'dupla micção'",
        "Exercícios para aumentar a capacidade da bexiga",
        "Exercícios de Kegel para fortalecer músculos pélvicos"
      ],
      category: "Conservador"
    },
    {
      icon: "Pill",
      title: "Medicamentos",
      description: "Tratamento farmacológico personalizado",
      details: [
        "Anticolinérgicos para reduzir contrações involuntárias",
        "Agonistas beta-3 para relaxar o músculo da bexiga",
        "Bloqueadores alfa para facilitar o esvaziamento",
        "Desmopressina para controlar produção de urina noturna"
      ],
      category: "Farmacológico"
    },
    {
      icon: "Syringe",
      title: "Toxina Botulínica (Botox)",
      description: "Injeções para reduzir contrações involuntárias",
      details: [
        "Injetada diretamente no músculo da bexiga",
        "Efeito dura cerca de 6-12 meses",
        "Reduz significativamente as contrações involuntárias",
        "Procedimento minimamente invasivo"
      ],
      category: "Minimamente Invasivo"
    },
    {
      icon: "Zap",
      title: "Neuromodulação",
      description: "Estimulação de nervos específicos",
      details: [
        "Estimulação do nervo sacral com dispositivo implantável",
        "Estimulação percutânea do nervo tibial",
        "Modula os sinais nervosos para a bexiga",
        "Tratamento ambulatorial disponível"
      ],
      category: "Minimamente Invasivo"
    },
    {
      icon: "Stethoscope",
      title: "Cirurgias Especializadas",
      description: "Para casos refratários aos tratamentos conservadores",
      details: [
        "Cistoplastia de aumento para aumentar capacidade",
        "Derivação urinária para criar novas vias",
        "Esfíncter urinário artificial",
        "Slings uretrais para controle da continência"
      ],
      category: "Cirúrgico"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800">
          Opções de <span className="text-green-600">Tratamento</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Conheça as diferentes abordagens terapêuticas disponíveis para a bexiga neurogênica
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {tratamentos?.map((tratamento, index) => (
          <TreatmentCard
            key={index}
            icon={tratamento.icon}
            title={tratamento.title}
            description={tratamento.description}
            details={tratamento.details}
            category={tratamento.category}
          />
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg border border-blue-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Tratamento Personalizado
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            O tratamento da bexiga neurogênica é sempre personalizado e pode envolver múltiplas abordagens. 
            A escolha do tratamento adequado depende de fatores como tipo de disfunção, gravidade dos sintomas, 
            condições associadas e preferências do paciente.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed font-semibold">
            Sempre consulte um urologista especializado para definir o melhor plano de tratamento para seu caso.
          </p>
        </div>
      </div>
    </div>
  )
}
