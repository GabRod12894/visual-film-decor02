import { Navigation } from "@/components/navigation"
import { WhatsAppPopupButton } from "@/components/WhatsAppPopupButton";
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Users, Award, Target, Heart, Calendar, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function SobrePage() {
  return (
  <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              Mais de 30 anos de experiência
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground text-balance">Nossa História</h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty">
              Conheça nossa história e os valores que nos guiam há mais de 30 anos transformando lares através de
              soluções inovadoras em vidros e decoração.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Fundada em 1994</h2>
                    <p className="text-muted-foreground">30 anos de tradição e qualidade</p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  A Visual Film Decor nasceu em 1994, fundada por <strong>Valdimir</strong> com o sonho de transformar
                  lares através de soluções inovadoras em vidros e decoração. Com o tempo, a empresa passou para os
                  filhos <strong>Gabriel e Daniel Rodrigues</strong>, que mantiveram os valores de qualidade e
                  excelência no atendimento.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hoje atuamos em <strong>Brasília/DF e Teresina/PI</strong>, oferecendo serviços especializados em
                  vidros, persianas, telas mosquiteiras, redes de proteção e películas residenciais. Nossa experiência
                  de mais de 30 anos no mercado nos permite entregar soluções personalizadas que combinam
                  funcionalidade, segurança e design.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppPopupButton
                  buttonText="Solicitar Orçamento"
                  buttonClassName="bg-green-600 hover:bg-green-700 text-white shadow-lg"
                  icon={<Phone className="w-5 h-5 mr-2" />} contacts={[]}                />
                <Button size="lg" className="bg-blue-200 text-blue-900 border-blue-300 hover:bg-blue-300 hover:text-blue-900 shadow-md" asChild>
                  <Link href="/servicos">Conhecer Serviços</Link>
                </Button>
              </div>
            </div>

            {/* Imagem da equipe Visual Film Decor trabalhando */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <img
                  src="/ValdimirRodrigues.jpg"
                  alt="Equipe Visual Film Decor trabalhando"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Nossos Valores</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e relacionamento com clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Transformar residências através de soluções inovadoras e personalizadas, proporcionando conforto,
                  segurança e beleza para nossos clientes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-serif">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Qualidade, transparência, compromisso com prazos, atendimento personalizado e busca constante pela
                  excelência em todos os nossos serviços.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">O que fazemos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Oferecemos soluções completas em vidros, persianas, telas mosquiteiras, redes de proteção e películas,
                  sempre com foco na satisfação do cliente.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Direção</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A família que construiu e mantém a tradição de qualidade da Visual Film Decor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-4">
                {/* Foto personalizada do Valdimir */}
                <div className="flex flex-col items-center">
                  <img src="ValdimirRodrigues.jpg" alt="Valdimir" className="rounded-full w-24 h-24 mb-2 object-cover border-2 border-primary" />
                  {/* Título do card com o nome */}
                  <CardTitle className="text-xl font-serif mt-6">Valdimir Sousa</CardTitle>
                  {/* Função do proprietário */}
                  <p className="text-secondary font-medium">Fundador</p>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Fundador da Visual Film Decor em 1994, Valdimir construiu a empresa com base na qualidade e no
                  atendimento personalizado, valores que permanecem até hoje.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-4">
                {/* Foto personalizada do Gabriel Rodrigues */}
                <div className="flex flex-col items-center">
                  <img src="Gabriel Rodrigues.jpg" alt="Gabriel Rodrigues" className="rounded-full w-24 h-24 mb-2 object-cover border-2 border-primary" style={{objectPosition: 'center 0%', transform: 'scale(1.25)'}} />
                  {/* Título do card com o nome */}
                  <CardTitle className="text-xl font-serif mt-6">Gabriel Rodrigues</CardTitle>
                  {/* Função do proprietário */}
                  <p className="text-secondary font-medium">Gestão comercial e operações</p>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Responsável pela gestão comercial e operacional da empresa, Gabriel garante que todos os projetos
                  sejam executados com excelência e dentro dos prazos.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-4">
                {/* Foto personalizada do Daniel Rodrigues */}
                <div className="flex flex-col items-center">
                  <img src="DanielRodrigues.jpg" alt="Daniel Rodrigues" className="rounded-full w-24 h-24 mb-2 object-cover border-2 border-primary" style={{objectPosition: 'center 0%'}} />
                  {/* Título do card com o nome */}
                  <CardTitle className="text-xl font-serif mt-6">Daniel Rodrigues</CardTitle>
                  {/* Função do proprietário */}
                  <p className="text-secondary font-medium">Projetos e qualidade técnica</p>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Especialista em projetos e qualidade técnica, Daniel assegura que todas as soluções atendam aos mais
                  altos padrões de segurança e funcionalidade.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Onde Atuamos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Atendemos com excelência em duas importantes capitais brasileiras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-serif">Brasília/DF</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-base">
                  Atendemos toda a região do Distrito Federal com nossa equipe especializada, oferecendo soluções
                  personalizadas para residências e estabelecimentos comerciais.
                </CardDescription>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Segunda a Sexta: 8h às 18h
                  </div>
                  <div className="flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Sábado: 8h às 12h
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-serif">Teresina/PI</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-base">
                  Nossa atuação no Piauí garante que mais famílias tenham acesso aos nossos serviços de qualidade,
                  mantendo o mesmo padrão de excelência em todos os projetos.
                </CardDescription>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Segunda a Sexta: 8h às 18h
                  </div>
                  <div className="flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Sábado: 8h às 12h
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className="py-20 bg-gradient-to-br from-black via-blue-900 to-blue-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white text-balance">
              Quer fazer parte da nossa história?
            </h2>
            <p className="text-xl text-white/90 text-pretty">
              Entre em contato conosco e descubra como podemos transformar seu espaço com mais de 30 anos de experiência
              e tradição familiar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="orcamento" asChild>
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
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                asChild
              >
                <Link href="/servicos">Conhecer Serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
