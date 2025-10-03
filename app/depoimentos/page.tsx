
import TestimonialCard from '@/components/testimonial-card'

export default function DepoimentosPage() {
  const depoimentos = [
    {
      name: "Maria Silva",
      condition: "Esclerose Múltipla",
      age: "42 anos",
      testimonial: "Quando recebi o diagnóstico de esclerose múltipla há 5 anos, a bexiga neurogênica foi um dos sintomas mais desafiadores. No início, sentia muita vergonha e evitava sair de casa. Com o apoio da minha família e da equipe médica, aprendi a usar o cateterismo intermitente. Hoje levo uma vida normal, trabalho, viajo e até voltei a praticar yoga. O segredo é aceitar a condição e buscar ajuda.",
      tips: ["Aprenda a técnica correta do cateterismo", "Não tenha vergonha de buscar ajuda", "Mantenha-se ativa física e socialmente"]
    },
    {
      name: "João Santos",
      condition: "Lesão Medular",
      age: "28 anos",
      testimonial: "Após um acidente de moto aos 25 anos, minha vida mudou completamente. A lesão medular trouxe muitos desafios, incluindo a bexiga neurogênica. Os primeiros meses foram muito difíceis, tanto fisicamente quanto emocionalmente. Mas com fisioterapia, apoio psicológico e muita determinação, consegui me adaptar. Hoje uso cadeira de rodas, gerencio minha bexiga com sucesso e até voltei a estudar.",
      tips: ["Aceite ajuda profissional e da família", "Estabeleça uma rotina de cuidados", "Foque no que você ainda pode fazer"]
    },
    {
      name: "Ana Costa",
      condition: "Espinha Bífida",
      age: "35 anos",
      testimonial: "Nasci com espinha bífida e sempre convivi com a bexiga neurogênica. Meus pais foram fundamentais para me ensinar independência desde pequena. Cresci fazendo cateterismo e nunca me senti diferente das outras crianças. Hoje sou enfermeira, sou casada e tenho dois filhos. Minha condição nunca me impediu de realizar meus sonhos. A informação e o apoio fazem toda a diferença.",
      tips: ["Ensine independência desde cedo", "Busque informação de qualidade", "Não deixe a condição limitar seus sonhos"]
    },
    {
      name: "Roberto Oliveira",
      condition: "AVC",
      age: "58 anos",
      testimonial: "Depois do AVC aos 55 anos, desenvolvi bexiga neurogênica. Foi muito frustrante perder o controle de algo tão básico. Minha esposa foi meu anjo da guarda, me ajudando com paciência infinita. Com medicamentos, fisioterapia e muita perseverança, consegui recuperar parte do controle. Ainda uso fraldas às vezes, mas não me impedem de viver bem. Gratidão é minha palavra de ordem.",
      tips: ["Conte com o apoio da família", "Seja paciente com o processo de adaptação", "Mantenha o otimismo e a gratidão"]
    },
    {
      name: "Carmen Rodriguez",
      condition: "Diabetes - Neuropatia",
      age: "48 anos",
      testimonial: "O diabetes mal controlado me trouxe várias complicações, incluindo a neuropatia que afetou minha bexiga. No início, não entendia por que tinha tantas infecções urinárias. Quando descobri a bexiga neurogênica, tudo fez sentido. Mudei completamente meu estilo de vida: dieta rigorosa, exercícios, medicamentos corretos. Hoje tenho o diabetes controlado e a bexiga muito melhor.",
      tips: ["Controle rigorosamente o diabetes", "Mantenha acompanhamento médico regular", "Mude o estilo de vida completamente"]
    },
    {
      name: "Luciana Ferreira",
      condition: "Mãe de criança com Espinha Bífida",
      age: "36 anos",
      testimonial: "Quando meu filho Pedro nasceu com espinha bífida, eu não sabia nada sobre bexiga neurogênica. Foi assustador no início. Aprendi tudo sobre cateterismo, cuidados, sinais de infecção. Pedro hoje tem 8 anos, é uma criança feliz e independente. Ensino outros pais porque sei como é difícil no começo. O amor e a informação movem montanhas.",
      tips: ["Busque grupos de apoio para pais", "Aprenda todas as técnicas de cuidado", "Ensine independência gradualmente"]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800">
          Histórias de <span className="text-green-600">Superação</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Depoimentos reais de pessoas que vivem com bexiga neurogênica e seus familiares
        </p>
      </div>

      <div className="space-y-8 mb-12">
        {depoimentos?.map((depoimento, index) => (
          <TestimonialCard
            key={index}
            name={depoimento.name}
            condition={depoimento.condition}
            age={depoimento.age}
            testimonial={depoimento.testimonial}
            tips={depoimento.tips}
          />
        ))}
      </div>

      <div className="bg-purple-50 rounded-2xl p-8 shadow-lg border border-purple-200 text-center">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">
          🌟 Sua História Também Importa
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Você tem uma história de superação para compartilhar? Seu depoimento pode ser a inspiração 
          que alguém precisa para não desistir. Juntos, somos mais fortes.
        </p>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <p className="text-gray-600 italic">
            "Cada história de superação é uma luz que ilumina o caminho de outras pessoas. 
            Compartilhar experiências é um ato de amor e esperança."
          </p>
        </div>
      </div>
    </div>
  )
}
