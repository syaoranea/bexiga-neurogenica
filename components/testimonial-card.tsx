
'use client'

import { Quote, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

interface TestimonialCardProps {
  name: string
  condition: string
  age: string
  testimonial: string
  tips?: string[]
}

export default function TestimonialCard({ name, condition, age, testimonial, tips }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center">
            <Heart className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <p className="text-gray-600">{condition} • {age}</p>
          </div>
        </div>
        <Quote className="h-8 w-8 text-blue-200 flex-shrink-0" />
      </div>
      
      <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
        "{testimonial}"
      </blockquote>
      
      {tips && tips?.length > 0 && (
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <h4 className="font-semibold text-blue-800 mb-3">💡 Dicas de {name.split(' ')[0]}:</h4>
          <ul className="space-y-2">
            {tips?.map((tip, index) => (
              <li key={index} className="text-sm text-blue-700 flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  )
}
