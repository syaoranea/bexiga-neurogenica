
'use client'

import { Droplets, Utensils, Shield, Activity, MapPin, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const iconMap = {
  Droplets,
  Utensils,
  Shield,
  Activity,
  MapPin,
  Heart,
}

type CategoryType = 'Básico' | 'Alimentação' | 'Higiene' | 'Exercícios' | 'Praticidade' | 'Emocional'

interface CareCardProps {
  icon: string
  title: string
  tips: string[]
  category: CategoryType
}

const categoryColors: Record<CategoryType, string> = {
  'Básico': 'bg-blue-100 text-blue-800 border-blue-200',
  'Alimentação': 'bg-green-100 text-green-800 border-green-200',
  'Higiene': 'bg-purple-100 text-purple-800 border-purple-200',
  'Exercícios': 'bg-orange-100 text-orange-800 border-orange-200',
  'Praticidade': 'bg-indigo-100 text-indigo-800 border-indigo-200',
  'Emocional': 'bg-pink-100 text-pink-800 border-pink-200'
}

export default function CareCard({ icon, title, tips, category }: CareCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap]
  
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[category] || 'bg-gray-100 text-gray-800 border-gray-200'}`}>
          {category}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {title}
      </h3>
      
      <ul className="space-y-3">
        {tips?.map((tip, index) => (
          <li key={index} className="text-gray-600 flex items-start">
            <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-sm leading-relaxed">{tip}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
