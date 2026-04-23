import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, ArrowLeft, CheckCircle, Shield, Award, Wrench, Star, Home } from "lucide-react"
import Link from "next/link"
import { WhatsAppPopupButton } from "@/components/WhatsAppPopupButton"

export default function VidrosPage() {
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
            <span className="text-foreground">Vidros</span>
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
                  Especialidade em Vidros
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Vidros</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Box de banheiro, espelhos, janelas, guarda-corpos e envidraçamento sob medida. Trabalhamos com vidros
                  temperados, laminados e comuns, sempre priorizando segurança e qualidade em cada projeto.
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
                <Link href="/contato" className="flex items-center">
                  Saiba mais
                </Link>
              </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white">
                <img
                  src="/boxBanheiro2.png"
                  alt="Box de banheiro em vidro temperado"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Nossas Soluções em Vidros</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Produtos sob medida com a mais alta qualidade e segurança
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-primary/20 rounded border-2 border-primary/40"></div>
                </div>
                <CardTitle className="text-xl font-serif">Box de Banheiro</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Box sob medida com vidro temperado, perfis de alumínio e acabamentos de qualidade. Modelos de correr,
                  sanfonado e pivotante.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Vidro temperado 8mm
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Perfis de alumínio anodizado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Puxadores e dobradiças premium
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-secondary/40 rounded-full border-2 border-secondary"></div>
                </div>
                <CardTitle className="text-xl font-serif">Espelhos Decorativos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Espelhos sob medida para decoração, com cortes especiais, bisotê e instalação segura em qualquer
                  ambiente.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Cortes personalizados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Acabamento bisotê
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Instalação profissional
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">Janelas e Portas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Janelas de vidro temperado, portas de correr e pivotantes com sistemas de abertura modernos e seguros.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Sistemas de abertura modernos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Vedação eficiente
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Design personalizado
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl font-serif">Guarda-corpos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Guarda-corpos de vidro temperado para escadas, sacadas e mezaninos, com design moderno e total
                  segurança.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Vidro temperado laminado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Fixação em inox
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Normas de segurança
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-200 to-blue-400 text-blue-900 border-0 rounded-2xl shadow-xl">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-serif text-white">Precisa de Ajuda?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-white/90 text-base">
                  Entre em contato conosco e receba um orçamento personalizado para seu projeto.
                </CardDescription>
                <WhatsAppPopupButton
                  buttonText="Solicitar Orçamento"
                  buttonClassName="w-full bg-blue-200 text-blue-900 border-blue-300 hover:bg-blue-300 hover:text-blue-900 shadow-md transition-all duration-200 rounded-md px-2 py-1"
                  icon={<Phone className="w-4 h-4 mr-2 text-green-600" />}
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
                <h3 className="text-xl font-serif font-semibold">30+ Anos de Experiência</h3>
                <p className="text-muted-foreground">
                  Desde 1994 oferecendo soluções de qualidade para residências em Brasília e Teresina.
                </p>
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
              Por que escolher nossos vidros?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Segurança Garantida</h3>
              <p className="text-muted-foreground text-sm">
                Utilizamos apenas vidros temperados e laminados que atendem às normas de segurança.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Sob Medida</h3>
              <p className="text-muted-foreground text-sm">
                Cada projeto é único e desenvolvido especialmente para seu espaço e necessidades.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Instalação Profissional</h3>
              <p className="text-muted-foreground text-sm">
                Equipe especializada com mais de 30 anos de experiência em instalações.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Garantia de Qualidade</h3>
              <p className="text-muted-foreground text-sm">
                Oferecemos garantia em todos os nossos produtos e serviços de instalação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white">
              Interessado em nossos serviços de vidros?
            </h2>
            <p className="text-xl text-white/90">
              Entre em contato conosco e receba um orçamento personalizado para seu projeto em vidros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://wa.me/5561999999999" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Pedir Orçamento
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                asChild
              >
                <Link href="/servicos">Ver Todos os Serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
