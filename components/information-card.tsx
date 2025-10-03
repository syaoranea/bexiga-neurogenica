
'use client'

import { Heart, Brain, AlertTriangle, Stethoscope, Users, Lightbulb } from 'lucide-react'
import { motion } from 'framer-motion'

const iconMap = {
  Heart,
  Brain,
  AlertTriangle,
  Stethoscope,
  Users,
  Lightbulb,
}

interface InformationCardProps {
  icon: string
  title: string
  content: string
}

export default function InformationCard({ icon, title, content }: InformationCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap]
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {content}
      </p>
    </motion.div>
  )
}
