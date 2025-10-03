
'use client'

import Link from 'next/link'
import { Heart, ArrowRight, Users, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                <Heart className="h-7 w-7 text-blue-600" />
              </div>
              <span className="text-blue-600 font-semibold">Apoio e Informação</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Bexiga <span className="text-blue-600">Neurogênica</span>
              <br />
              <span className="text-green-600">Informação</span> e <span className="text-green-600">Apoio</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Um espaço acolhedor com informações confiáveis, dicas práticas e apoio emocional 
              para pessoas que convivem com bexiga neurogênica e seus familiares.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/informacoes"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Conhecer a Condição
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <Link
                href="/recursos"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Users className="mr-2 h-5 w-5" />
                Buscar Apoio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Informações confiáveis</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Apoio especializado</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Comunidade acolhedora</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                    <Heart className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Você não está sozinho
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Milhões de pessoas no mundo convivem com bexiga neurogênica. 
                    Com informação, tratamento adequado e apoio, é possível ter 
                    qualidade de vida e realizar seus sonhos.
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-blue-600">6+</div>
                      <div className="text-xs text-gray-600">Seções Informativas</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-green-600">24h</div>
                      <div className="text-xs text-gray-600">Acesso a Recursos</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-purple-600">100%</div>
                      <div className="text-xs text-gray-600">Gratuito</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
