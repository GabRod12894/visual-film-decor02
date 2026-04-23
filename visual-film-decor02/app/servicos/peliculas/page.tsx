import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, ArrowLeft, CheckCircle, Sun, Shield, Eye, Award, Zap, Home } from "lucide-react"
import Link from "next/link"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function PeliculasPage() {
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
            <span className="text-foreground">Películas</span>
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
                  Controle Solar e Privacidade
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Películas</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Controle solar, segurança e privacidade com películas jateadas e espelhadas. Reduz o calor, protege
                  móveis da radiação UV e oferece privacidade sem comprometer a luminosidade natural do ambiente.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Solicitar Orçamento
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Selecione a cidade para contato</DialogTitle>
                    <DialogDescription>
                      Escolha abaixo para ser direcionado ao WhatsApp do atendimento de Brasília ou Teresina.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-4 mt-6">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                      <a href="https://wa.me/5561985981075" target="_blank" rel="noopener noreferrer">
                        Atendimento Brasília<br /><span className="text-xs">+55 61 98598-1075</span>
                      </a>
                    </Button>
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                      <a href="https://wa.me/5586998431002" target="_blank" rel="noopener noreferrer">
                        Atendimento Teresina<br /><span className="text-xs">+55 86 99843-1002</span>
                      </a>
                    </Button>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancelar</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/1bg-blue-200 text-blue-900 border-blue-300 hover:bg-blue-300 hover:text-blue-900 shadow-md"
                asChild
              >
                <Link href="/servicos">Saiba mais</Link>
              </Button>
            </div>  
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white">
                <img
                  src="/PeliculaTop.jpg"
                  alt="Película solar aplicada em janela"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Films */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Tipos de Películas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções para cada necessidade de controle solar, segurança e privacidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sun className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">Controle Solar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Reduz significativamente o calor e o brilho excessivo, mantendo o ambiente mais confortável e
                  economizando energia.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Redução de até 80% do calor
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Economia de energia
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Controle de brilho
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl font-serif">Películas de Segurança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Aumenta a resistência do vidro contra impactos e tentativas de arrombamento, oferecendo maior
                  segurança.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Resistência a impactos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Anti-estilhaçamento
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Proteção contra vandalismo
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">Privacidade</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Películas jateadas e espelhadas que garantem privacidade sem bloquear completamente a entrada de luz
                  natural.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Películas jateadas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Películas espelhadas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Mantém luminosidade
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary/40 to-secondary/40 rounded border border-primary/20"></div>
                </div>
                <CardTitle className="text-xl font-serif">Proteção UV</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Bloqueia até 99% dos raios UV nocivos, protegendo móveis, pisos e objetos do desbotamento e
                  deterioração.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Bloqueio 99% UV
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Protege móveis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Evita desbotamento
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Aplicações</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nossas películas são ideais para diversos tipos de ambientes e necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Residencial</h3>
              <p className="text-muted-foreground text-sm">
                Casas e apartamentos que buscam conforto térmico, economia de energia e privacidade.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Comercial</h3>
              <p className="text-muted-foreground text-sm">
                Escritórios, lojas e estabelecimentos comerciais que precisam de controle solar e privacidade.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Automotivo</h3>
              <p className="text-muted-foreground text-sm">
                Veículos que necessitam de proteção solar, privacidade e redução do calor interno.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
              Benefícios das nossas películas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Sun className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Controle Térmico</h3>
              <p className="text-muted-foreground text-sm">
                Redução significativa da temperatura interna, proporcionando maior conforto e economia de energia.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Proteção UV</h3>
              <p className="text-muted-foreground text-sm">
                Bloqueio de até 99% dos raios ultravioleta, protegendo pessoas e objetos dos danos causados pelo sol.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Privacidade</h3>
              <p className="text-muted-foreground text-sm">
                Controle da visibilidade externa mantendo a entrada de luz natural no ambiente.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Economia</h3>
              <p className="text-muted-foreground text-sm">
                Redução no uso de ar condicionado e proteção de móveis, gerando economia a longo prazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white">Interessado em nossas películas?</h2>
            <p className="text-xl text-white/90">
              Entre em contato conosco e receba um orçamento personalizado para suas películas.
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
