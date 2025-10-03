
'use client'

import { Pill, Syringe, Zap, Activity, Stethoscope, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const iconMap = {
  Pill,
  Syringe,
  Zap,
  Activity,
  Stethoscope,
  Heart,
}

type TreatmentCategoryType = 'Conservador' | 'Farmacológico' | 'Minimamente Invasivo' | 'Cirúrgico'

interface TreatmentCardProps {
  icon: string
  title: string
  description: string
  details: string[]
  category: TreatmentCategoryType
}

const categoryColors: Record<TreatmentCategoryType, string> = {
  'Conservador': 'bg-green-100 text-green-800 border-green-200',
  'Farmacológico': 'bg-blue-100 text-blue-800 border-blue-200',
  'Minimamente Invasivo': 'bg-purple-100 text-purple-800 border-purple-200',
  'Cirúrgico': 'bg-red-100 text-red-800 border-red-200'
}

export default function TreatmentCard({ icon, title, description, details, category }: TreatmentCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap]
  
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
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
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-gray-800 mb-2">Características:</h4>
        <ul className="space-y-2">
          {details?.map((detail, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start">
              <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
