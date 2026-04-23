import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, ArrowLeft, CheckCircle, Shield, Users, Heart, Award, Clock } from "lucide-react"
import Link from "next/link"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function RedesPage() {
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
            <span className="text-foreground">Redes de Proteção</span>
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
                  Segurança para Toda Família
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Redes de Proteção</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Segurança para crianças e pets em janelas, sacadas e áreas abertas. Redes resistentes e discretas que
                  não comprometem a estética do ambiente, oferecendo tranquilidade total para sua família.
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
                  src="/RedeDeProtecao2.jpg"
                  alt="Rede de proteção instalada em sacada"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Safety Nets */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Tipos de Redes de Proteção</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções específicas para cada necessidade de segurança
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">Proteção para Crianças</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Redes especiais para evitar acidentes com crianças em janelas, sacadas e varandas. Máxima segurança
                  com total tranquilidade.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Malha 3x3cm (anti-criança)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Resistência de 120kg
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Certificação INMETRO
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl font-serif">Proteção para Pets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Redes resistentes para proteger cães e gatos, permitindo que aproveitem áreas abertas com total
                  segurança.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Malha 5x5cm (anti-pet)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Material anti-roer
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Proteção UV
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 border border-primary/40 rounded grid grid-cols-4 gap-px p-0.5">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="bg-primary/20 rounded-sm"></div>
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl font-serif">Redes Discretas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Material transparente e discreto que não interfere na estética do ambiente ou na vista panorâmica.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Fio de nylon transparente
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Não compromete a vista
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Estética preservada
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl font-serif">Alta Resistência</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Material de alta qualidade, resistente a intempéries e com garantia de durabilidade comprovada.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Resistente ao sol e chuva
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Não resseca nem racha
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Garantia de 5 anos
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
              Por que escolher nossas redes de proteção?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Segurança Máxima</h3>
              <p className="text-muted-foreground text-sm">
                Proteção eficaz contra quedas e acidentes, testada e certificada pelos órgãos competentes.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Para Toda Família</h3>
              <p className="text-muted-foreground text-sm">
                Soluções específicas para crianças, pets e diferentes necessidades de proteção.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Qualidade Certificada</h3>
              <p className="text-muted-foreground text-sm">
                Materiais certificados pelo INMETRO e instalação por profissionais qualificados.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Longa Durabilidade</h3>
              <p className="text-muted-foreground text-sm">
                Garantia de 5 anos contra defeitos de fabricação e resistência às intempéries.
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
              Interessado em nossas redes de proteção?
            </h2>
            <p className="text-xl text-white/90">
              Entre em contato conosco e receba um orçamento personalizado para suas redes de proteção.
            </p>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
