import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, ArrowLeft, CheckCircle, Eye, Zap, Award, Palette } from "lucide-react"
import Link from "next/link"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function PersianaPage() {
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
            <span className="text-foreground">Persianas</span>
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
                  Controle de Luminosidade
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Persianas</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Rolô, romana, vertical, blackout e motorização para controle total da luminosidade. Diversos materiais
                  e cores para harmonizar perfeitamente com sua decoração, oferecendo funcionalidade e elegância.
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
                  src="/PersianaTop.jpg"
                  alt="Persiana rolô moderna em sala de estar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Blinds */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Tipos de Persianas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Soluções para cada ambiente e necessidade</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="space-y-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-6 h-0.5 bg-primary/60 rounded"></div>
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl font-serif">Persiana Rolô</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Modelos práticos e modernos, disponíveis em diversos tecidos e cores. Ideal para ambientes
                  contemporâneos.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Tecidos blackout e translúcidos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Sistema de acionamento suave
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Instalação simples e rápida
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-secondary/20 rounded border border-secondary/40"></div>
                </div>
                <CardTitle className="text-xl font-serif">Persiana Romana</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Elegância clássica com dobras horizontais. Perfeita para salas e quartos que buscam sofisticação.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Dobras elegantes e uniformes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Tecidos nobres e resistentes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Design atemporal
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-1 h-6 bg-primary/60 rounded"></div>
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl font-serif">Persiana Vertical</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Ideal para janelas grandes e portas de correr. Controle preciso da luminosidade e privacidade.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Lâminas giratórias 89mm
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Controle de abertura lateral
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
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl font-serif">Blackout e Motorização</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Escurecimento total para quartos e home theaters, com opção de motorização para máximo conforto.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Bloqueio 100% da luz
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Motor silencioso
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Controle remoto
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
              Vantagens das nossas persianas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Controle de Luz</h3>
              <p className="text-muted-foreground text-sm">
                Controle preciso da luminosidade para criar o ambiente perfeito em qualquer hora do dia.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                <Palette className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Variedade de Cores</h3>
              <p className="text-muted-foreground text-sm">
                Ampla gama de cores e texturas para harmonizar com qualquer decoração.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Automação</h3>
              <p className="text-muted-foreground text-sm">
                Opção de motorização com controle remoto para máximo conforto e praticidade.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Durabilidade</h3>
              <p className="text-muted-foreground text-sm">
                Materiais de alta qualidade que garantem longa vida útil e fácil manutenção.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white">Interessado em nossas persianas?</h2>
            <p className="text-xl text-white/90">
              Entre em contato conosco e receba um orçamento personalizado para suas persianas.
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
