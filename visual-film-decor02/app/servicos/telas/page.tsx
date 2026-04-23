import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, ArrowLeft, CheckCircle, Shield, Eye, Award, Wind } from "lucide-react"
import Link from "next/link"
import { WhatsAppPopupButton } from "@/components/WhatsAppPopupButton"

export default function TelasPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <section className="bg-card py-4 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link href="/servicos" className="hover:text-primary transition-colors">
              Serviços
            </Link>
            <span>/</span>
            <span className="text-foreground">Telas Mosquiteiras</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/servicos">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar aos Serviços
                  </Link>
                </Button>
                <Badge variant="secondary" className="w-fit">
                  Proteção contra Insetos
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Telas Mosquiteiras</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Modelos fixos, de correr e magnéticos para proteção contra insetos. Mantém a ventilação natural
                  enquanto protege sua família de mosquitos, moscas e outros insetos indesejados.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppPopupButton
                  buttonText="Solicitar Orçamento"
                  buttonClassName="bg-green-600 hover:bg-green-700 text-white"
                  icon={<Phone className="w-5 h-5 mr-2" />}
                  contacts={[{
                    label: "Atendimento Brasília",
                    phone: "+55 61 98598-1075",
                    link: "https://wa.me/5561985981075"
                  }, {
                    label: "Atendimento Teresina",
                    phone: "+55 86 99843-1002",
                    link: "https://wa.me/5586998431002"
                  }]}
                />
              <Button
                size="lg"
                variant="outline"
                className="bg-blue-200 text-blue-900 border-blue-300 hover:bg-blue-300 hover:text-blue-900 shadow-md"
                asChild
              >
                <Link href="/contato">
                  Saiba mais
                </Link>
              </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white">
                <img
                  src="/TelaMosquiteira2.png"
                  alt="Tela mosquiteira instalada em janela"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Screens */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Tipos de Telas Mosquiteiras</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções para cada tipo de abertura e necessidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 border border-primary/40 rounded grid grid-cols-2 gap-px p-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="bg-primary/20 rounded-sm"></div>
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl font-serif">Telas Fixas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Instalação permanente em janelas e portas. Solução econômica e eficiente para proteção contínua.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Instalação permanente
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Custo-benefício excelente
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Manutenção mínima
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 border border-secondary/40 rounded relative">
                    <div className="absolute inset-1 bg-secondary/20 rounded-sm"></div>
                  </div>
                </div>
                <CardTitle className="text-xl font-serif">Telas Removíveis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Fácil instalação e remoção quando necessário. Ideal para quem busca praticidade e flexibilidade.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Fácil remoção
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Sistema de encaixe
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Flexibilidade de uso
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-6 bg-primary/40 rounded"></div>
                    <div className="w-2 h-6 bg-primary/60 rounded"></div>
                  </div>
                </div>
                <CardTitle className="text-xl font-serif">Telas de Correr</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Sistema deslizante para portas e janelas grandes. Permite abertura parcial mantendo a proteção.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Sistema deslizante
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Abertura parcial
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Ideal para grandes vãos
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-secondary/20 rounded-full border-2 border-secondary/40 relative">
                    <div className="absolute inset-2 bg-secondary/60 rounded-full"></div>
                  </div>
                </div>
                <CardTitle className="text-xl font-serif">Sistema Magnético</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Fechamento automático com ímãs. Perfeito para portas de entrada e saída frequente.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Fechamento automático
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Ímãs de neodímio
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Passagem livre
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
              Vantagens das nossas telas mosquiteiras
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Proteção Eficaz</h3>
              <p className="text-muted-foreground text-sm">
                Barreira eficiente contra mosquitos, moscas e outros insetos sem usar produtos químicos.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                <Wind className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Ventilação Natural</h3>
              <p className="text-muted-foreground text-sm">
                Permite a circulação livre do ar mantendo o ambiente fresco e arejado.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Visibilidade</h3>
              <p className="text-muted-foreground text-sm">
                Material transparente que não compromete a vista nem a entrada de luz natural.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Durabilidade</h3>
              <p className="text-muted-foreground text-sm">
                Material resistente às intempéries com garantia de longa durabilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black via-blue-900 to-blue-500">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white">Pronto para transformar seu lar?</h2>
        <p className="text-xl text-white/90">
          Entre em contato conosco hoje mesmo e receba um orçamento personalizado para seu projeto. Atendemos
          Brasília/DF e Teresina/PI com a qualidade que você merece.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <WhatsAppPopupButton
            buttonText="Solicitar Orçamento"
            buttonClassName="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white transition-all duration-200 rounded-md px-4 py-2 text-lg font-semibold flex items-center justify-center"
            icon={<Phone className="w-5 h-5 mr-2 text-white" />}
            contacts={[{
              label: "Atendimento Brasília",
              phone: "+55 61 98598-1075",
              link: "https://wa.me/5561985981075"
            }, {
              label: "Atendimento Teresina",
              phone: "+55 86 99843-1002",
              link: "https://wa.me/5586998431002"
            }]}
          />
        </div>
      </div>
    </div>
  </section>

      <Footer />
    </div>
  )
}
