
'use client'

import { Stethoscope, Users, Book, Heart, Phone, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const iconMap = {
  Stethoscope,
  Users,
  Book,
  Heart,
  Phone,
  Globe,
}

interface ResourceCardProps {
  icon: string
  title: string
  items: string[]
}

export default function ResourceCard({ icon, title, items }: ResourceCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap]
  
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {title}
      </h3>
      
      <ul className="space-y-3">
        {items?.map((item, index) => (
          <li key={index} className="text-gray-600 flex items-start">
            <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
