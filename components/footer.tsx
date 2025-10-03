
import Link from 'next/link'
import { Heart, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-xl font-bold">Bexiga Neurogênica</span>
            </div>
            <p className="text-blue-200 leading-relaxed mb-4">
              Informações confiáveis, apoio emocional e recursos práticos para pessoas 
              que convivem com bexiga neurogênica e seus familiares.
            </p>
            <p className="text-blue-300 text-sm">
              <strong>Importante:</strong> Este site tem caráter informativo. 
              Sempre consulte um médico especialista para diagnóstico e tratamento.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/informacoes" className="text-blue-200 hover:text-white transition-colors">
                  Informações Médicas
                </Link>
              </li>
              <li>
                <Link href="/tratamentos" className="text-blue-200 hover:text-white transition-colors">
                  Tratamentos
                </Link>
              </li>
              <li>
                <Link href="/cuidados" className="text-blue-200 hover:text-white transition-colors">
                  Cuidados Práticos
                </Link>
              </li>
              <li>
                <Link href="/recursos" className="text-blue-200 hover:text-white transition-colors">
                  Recursos e Apoio
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Emergências</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-blue-200">SAMU: 192</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-blue-200">Bombeiros: 193</span>
              </li>
              <li className="flex items-center space-x-2">
                <Heart className="h-4 w-4" />
                <span className="text-blue-200">CVV: 188</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-300 text-sm">
            © {currentYear} Bexiga Neurogênica - Site informativo. 
            Desenvolvido com carinho para apoiar pacientes e familiares.
          </p>
        </div>
      </div>
    </footer>
  )
}
