
import ResourceCard from '@/components/resource-card'
import WhatsAppCard from '@/components/whatsapp-card'
import { Phone } from 'lucide-react'

export default function RecursosPage() {
  const recursos = [
    {
      icon: "Stethoscope",
      title: "Recursos Médicos",
      items: [
        "Sociedade Brasileira de Urologia (SBU)",
        "Centros de reabilitação especializados",
        "Clínicas de incontinência urinária",
        "Equipes multidisciplinares especializadas"
      ]
    },
    {
      icon: "Users",
      title: "Organizações de Apoio",
      items: [
        "Associação Brasileira de Esclerose Múltipla (ABEM)",
        "Associação Brasileira de Lesados Medulares",
        "Federação Nacional das APAEs",
        "Grupos locais de apoio a pacientes"
      ]
    },
    {
      icon: "Book",
      title: "Recursos Educacionais",
      items: [
        "Sites médicos confiáveis e atualizados",
        "Vídeos educativos sobre técnicas de cuidado",
        "Cartilhas e manuais informativos",
        "Cursos online para pacientes e cuidadores"
      ]
    },
    {
      icon: "Heart",
      title: "Apoio Psicológico",
      items: [
        "Psicólogos especializados em condições crônicas",
        "Grupos de apoio presenciais e online",
        "Terapia familiar e de casal",
        "Linhas de apoio emocional 24h"
      ]
    },
    {
      icon: "Phone",
      title: "Recursos Governamentais",
      items: [
        "Sistema Único de Saúde (SUS)",
        "Benefícios do INSS quando aplicável",
        "Programas das Secretarias de Saúde",
        "Lei Brasileira de Inclusão"
      ]
    },
    {
      icon: "Globe",
      title: "Produtos e Equipamentos",
      items: [
        "Fornecedores de materiais médicos",
        "Farmácias especializadas",
        "Empresas de home care",
        "Lojas de produtos adaptativos"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800">
          Recursos e <span className="text-green-600">Suporte</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Encontre apoio, informação e recursos para uma melhor qualidade de vida
        </p>
      </div>

      {/* WhatsApp Card - Destaque */}
      <div className="mb-12">
        <WhatsAppCard />
      </div>

      {/* Recursos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {recursos?.map((recurso, index) => (
          <ResourceCard
            key={index}
            icon={recurso.icon}
            title={recurso.title}
            items={recurso.items}
          />
        ))}
      </div>

      {/* Emergency Contacts */}
      <div className="bg-red-50 rounded-2xl p-8 shadow-lg border border-red-200 mb-8">
        <h2 className="text-2xl font-bold text-red-800 mb-6 text-center flex items-center justify-center gap-2">
          <Phone className="h-6 w-6" />
          Contatos de Emergência
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="font-bold text-red-700 mb-2">SAMU</h3>
            <p className="text-2xl font-bold text-red-800">192</p>
            <p className="text-sm text-gray-600">Emergências médicas</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="font-bold text-red-700 mb-2">Bombeiros</h3>
            <p className="text-2xl font-bold text-red-800">193</p>
            <p className="text-sm text-gray-600">Resgate e emergência</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="font-bold text-red-700 mb-2">CVV</h3>
            <p className="text-2xl font-bold text-red-800">188</p>
            <p className="text-sm text-gray-600">Apoio emocional 24h</p>
          </div>
        </div>
      </div>

      {/* Important Links */}
      <div className="bg-blue-50 rounded-2xl p-8 shadow-lg border border-blue-200 mb-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
          Links Importantes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-blue-700 mb-3">Informações Médicas</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Manual MSD:</strong> Guias médicos confiáveis</li>
              <li>• <strong>Drauzio Varella:</strong> Informações em português</li>
              <li>• <strong>SBU:</strong> Sociedade Brasileira de Urologia</li>
              <li>• <strong>ABN:</strong> Academia Brasileira de Neurologia</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-blue-700 mb-3">Apoio e Comunidade</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>ABEM:</strong> Esclerose múltipla</li>
              <li>• <strong>ABLM:</strong> Lesados medulares</li>
              <li>• <strong>FENAPAE:</strong> Pessoas com deficiência</li>
              <li>• <strong>Grupos locais:</strong> Busque em sua cidade</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-green-200 text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          💚 Juntos Somos Mais Fortes
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Não hesite em buscar ajuda quando precisar. Existem muitas pessoas e organizações prontas 
          para apoiá-lo nesta jornada. Você não está sozinho, e com o suporte adequado, é possível 
          viver uma vida plena e feliz.
        </p>
      </div>
    </div>
  )
}
