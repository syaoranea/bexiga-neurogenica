
'use client'

import Link from 'next/link'
import { Heart, Users, MessageCircle, BookOpen, ArrowRight, LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

type SupportColorType = 'green' | 'blue' | 'red' | 'purple'

export default function SupportSection() {
  const supportOptions: Array<{
    icon: LucideIcon
    title: string
    description: string
    action: string
    link: string
    color: SupportColorType
  }> = [
    {
      icon: MessageCircle,
      title: "Grupo WhatsApp",
      description: "Conecte-se com pessoas que entendem sua jornada",
      action: "Entrar no Grupo",
      link: "/recursos",
      color: "green"
    },
    {
      icon: BookOpen,
      title: "Informações",
      description: "Conteúdo médico confiável e acessível",
      action: "Ler Informações",
      link: "/informacoes",
      color: "blue"
    },
    {
      icon: Heart,
      title: "Cuidados",
      description: "Dicas práticas para o dia a dia",
      action: "Ver Cuidados",
      link: "/cuidados",
      color: "red"
    },
    {
      icon: Users,
      title: "Recursos",
      description: "Organizações e profissionais especializados",
      action: "Buscar Recursos",
      link: "/recursos",
      color: "purple"
    }
  ]

  const colorClasses: Record<SupportColorType, string> = {
    green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
    blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
    red: "from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
    purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Como podemos <span className="text-green-600">ajudar</span> você?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Escolha a opção que melhor atende às suas necessidades no momento
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportOptions?.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={option.link}>
                <div className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center cursor-pointer h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[option.color]} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {option.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                    {option.action}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 text-white text-center shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              💚 Você não precisa enfrentar isso sozinho
            </h3>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              Existem milhões de pessoas no mundo que convivem com bexiga neurogênica. 
              Com informação adequada, tratamento especializado e apoio da comunidade, 
              é possível viver uma vida plena e realizar seus sonhos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/recursos"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Buscar Apoio Agora
              </Link>
              <Link
                href="/depoimentos"
                className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-lg"
              >
                <Heart className="mr-2 h-5 w-5" />
                Ler Histórias de Superação
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
