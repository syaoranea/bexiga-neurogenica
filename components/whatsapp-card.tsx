
'use client'

import { MessageCircle, Users, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhatsAppCard() {
  const handleJoinWhatsApp = () => {
    window.open("https://chat.whatsapp.com/BQJC9ceWfMh5IQmhoT5vwW", "_blank");
  }

  return (
    <motion.div
      className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4">
          <MessageCircle className="h-32 w-32" />
        </div>
        <div className="absolute bottom-4 left-4">
          <Users className="h-24 w-24" />
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-white/20 rounded-full p-3">
            <MessageCircle className="h-8 w-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Grupo de Apoio no WhatsApp</h2>
            <p className="text-green-100">Conecte-se com outras pessoas que entendem sua jornada</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2" />
              O que você encontrará:
            </h3>
            <ul className="space-y-2 text-green-100">
              <li>• Apoio emocional de pessoas que vivem situações similares</li>
              <li>• Dicas práticas de quem já passou pelos mesmos desafios</li>
              <li>• Troca de experiências sobre tratamentos e cuidados</li>
              <li>• Ambiente acolhedor e livre de julgamentos</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Regras do grupo:</h3>
            <ul className="space-y-2 text-green-100">
              <li>• Respeito mútuo sempre</li>
              <li>• Não substitui orientação médica</li>
              <li>• Confidencialidade das informações</li>
              <li>• Apoio e positividade</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <motion.button
            onClick={handleJoinWhatsApp}
            className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-2xl hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Entrar no Grupo de Apoio
            <ArrowRight className="ml-3 h-5 w-5" />
          </motion.button>
          <p className="text-green-100 text-sm mt-3">
            Gratuito • Disponível 24/7 • Mais de 500 membros
          </p>
        </div>
      </div>
    </motion.div>
  )
}
