
'use client'

import { AlertTriangle, Heart, Users, Lightbulb } from 'lucide-react'
import { motion } from 'framer-motion'

export default function QuickInfoSection() {
  const quickFacts = [
    {
      icon: AlertTriangle,
      title: "Condição Comum",
      description: "Afeta milhões de pessoas mundialmente, principalmente após lesões neurológicas",
      stat: "40-90%",
      statDescription: "dos pacientes com esclerose múltipla"
    },
    {
      icon: Heart,
      title: "Tratável",
      description: "Diversos tratamentos disponíveis, desde conservadores até cirúrgicos",
      stat: "85%+",
      statDescription: "dos casos têm melhora significativa"
    },
    {
      icon: Users,
      title: "Apoio Disponível",
      description: "Grupos de suporte e profissionais especializados em todo o país",
      stat: "24/7",
      statDescription: "linhas de apoio emocional"
    },
    {
      icon: Lightbulb,
      title: "Vida Normal",
      description: "Com tratamento adequado, é possível manter qualidade de vida e independência",
      stat: "100%",
      statDescription: "das pessoas podem se adaptar"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Fatos <span className="text-green-600">Importantes</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Informações essenciais que podem ajudar você a entender melhor a condição
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {quickFacts?.map((fact, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <fact.icon className="h-6 w-6 text-blue-600" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {fact.title}
              </h3>
              
              <div className="mb-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {fact.stat}
                </div>
                <div className="text-sm text-gray-500">
                  {fact.statDescription}
                </div>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {fact.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-yellow-50 rounded-2xl p-8 shadow-lg border border-yellow-200 mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-yellow-800 mb-4">
            ⚡ Diagnóstico Precoce é Fundamental
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            O diagnóstico precoce e o início imediato do tratamento são cruciais para prevenir 
            complicações graves, como danos renais irreversíveis. Se você suspeita que possa 
            ter bexiga neurogênica, procure um urologista o quanto antes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
