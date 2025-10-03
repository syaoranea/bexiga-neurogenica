
'use client'

import Link from 'next/link'
import { BookOpen, Stethoscope, Heart, Users, Lightbulb, MessageCircle, LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

type ColorType = 'blue' | 'green' | 'red' | 'purple' | 'indigo' | 'yellow'

export default function FeaturesSection() {
  const features: Array<{
    icon: LucideIcon
    title: string
    description: string
    link: string
    color: ColorType
  }> = [
    {
      icon: BookOpen,
      title: "Informações Médicas",
      description: "Conteúdo confiável sobre causas, sintomas e tipos de bexiga neurogênica",
      link: "/informacoes",
      color: "blue"
    },
    {
      icon: Stethoscope,
      title: "Tratamentos",
      description: "Opções terapêuticas desde conservadores até cirúrgicos",
      link: "/tratamentos",
      color: "green"
    },
    {
      icon: Heart,
      title: "Cuidados Práticos",
      description: "Dicas essenciais para o dia a dia e melhor qualidade de vida",
      link: "/cuidados",
      color: "red"
    },
    {
      icon: MessageCircle,
      title: "Depoimentos",
      description: "Histórias reais de superação e esperança",
      link: "/depoimentos",
      color: "purple"
    },
    {
      icon: Users,
      title: "Recursos e Apoio",
      description: "Grupos de suporte, organizações e recursos especializados",
      link: "/recursos",
      color: "indigo"
    },
    {
      icon: Lightbulb,
      title: "Dicas de Adaptação",
      description: "Estratégias para adaptar rotinas e manter independência",
      link: "/cuidados",
      color: "yellow"
    }
  ]

  const colorClasses: Record<ColorType, string> = {
    blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    green: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
    red: "bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white",
    purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
    indigo: "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
    yellow: "bg-yellow-100 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white"
  }

  const borderClasses: Record<ColorType, string> = {
    blue: "border-blue-200 hover:border-blue-300",
    green: "border-green-200 hover:border-green-300",
    red: "border-red-200 hover:border-red-300",
    purple: "border-purple-200 hover:border-purple-300",
    indigo: "border-indigo-200 hover:border-indigo-300",
    yellow: "border-yellow-200 hover:border-yellow-300"
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Tudo que você precisa em <span className="text-blue-600">um só lugar</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Navegue por nossas seções especializadas e encontre o apoio que você precisa
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features?.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={feature.link}>
                <div className={`group bg-white rounded-2xl p-6 shadow-lg border-2 ${borderClasses[feature.color]} hover:shadow-xl transition-all duration-300 h-full cursor-pointer`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all duration-300 ${colorClasses[feature.color]}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 text-sm font-medium text-blue-600 group-hover:text-blue-700">
                    Saiba mais →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
