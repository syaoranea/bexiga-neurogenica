
'use client'

import Link from 'next/link'
import { Quote, ArrowRight, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function TestimonialsPreview() {
  const testimonials = [
    {
      name: "Maria Silva",
      condition: "Esclerose Múltipla",
      quote: "Com o apoio da minha família e da equipe médica, aprendi a usar o cateterismo intermitente. Hoje levo uma vida normal, trabalho, viajo e até voltei a praticar yoga.",
      highlight: "voltei a praticar yoga"
    },
    {
      name: "João Santos", 
      condition: "Lesão Medular",
      quote: "Os primeiros meses foram muito difíceis, mas com fisioterapia, apoio psicológico e muita determinação, consegui me adaptar. Hoje uso cadeira de rodas, gerencio minha bexiga com sucesso.",
      highlight: "gerencio com sucesso"
    },
    {
      name: "Ana Costa",
      condition: "Espinha Bífida",
      quote: "Cresci fazendo cateterismo e nunca me senti diferente. Hoje sou enfermeira, sou casada e tenho dois filhos. Minha condição nunca me impediu de realizar meus sonhos.",
      highlight: "nunca me impediu de sonhar"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Histórias de <span className="text-purple-600">Superação</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Conheça pessoas reais que transformaram desafios em conquistas
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials?.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.condition}</p>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="absolute top-0 left-0 h-6 w-6 text-purple-200 -mt-2 -ml-2" />
                <blockquote className="text-gray-700 italic leading-relaxed text-sm pl-4">
                  {testimonial.quote}
                </blockquote>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-purple-600 font-medium">
                  ✨ {testimonial.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/depoimentos"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Ver Todos os Depoimentos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
