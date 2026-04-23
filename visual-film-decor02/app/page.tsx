import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { WhatsAppPopupButton } from "@/components/WhatsAppPopupButton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Instagram, Star, Shield, Clock, Users, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
  <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
  <section className="bg-white py-16 lg:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 animate-fade-in">
              <div className="space-y-5">
                <Badge variant="secondary" className="w-fit mx-auto animate-bounce-slow">Desde 1994</Badge>
                <h1 className="text-5xl lg:text-7xl font-serif font-extrabold text-gray-900 drop-shadow-lg">
                  Transformando lares com <span className="text-blue-700">qualidade</span> e <span className="text-blue-400">confiança</span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Especialistas em vidros, persianas, telas mosquiteiras, redes de proteção e películas residenciais.<br />
                  <span className="font-semibold text-blue-700">Mais de 30 anos de experiência</span> em Brasília/DF e Teresina/PI.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppPopupButton
                  buttonText="Solicitar Orçamento"
                  buttonClassName="bg-green-600 hover:bg-green-700 text-white"
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
                <Button size="lg" className="bg-blue-200 text-blue-900 border-blue-300 hover:bg-blue-300 hover:text-blue-900 shadow-md" asChild>
                  <Link href="/servicos">
                    Ver Nossos Serviços
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary animate-pulse" />
                    ))}
                  </div>
                  <span className="text-base text-muted-foreground font-medium">Excelência comprovada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-base text-muted-foreground font-medium">1000+ clientes satisfeitos</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 shadow-2xl border-4 border-primary/10">
                <img
                  src="/modern-home-interior-with-glass-windows-and-blinds.png"
                  alt="Interior moderno com vidros e persianas da Visual Film Decor"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-background border-2 border-primary/20 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                    <Shield className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">30+ Anos</p>
                    <p className="text-base text-muted-foreground">de Experiência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
  <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções completas para transformar sua residência com conforto, segurança e design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Glass Services */}
            <Card className="group border border-border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-300 bg-white/90 backdrop-blur h-full min-h-[370px] flex-1 flex flex-col justify-between p-8 md:p-10 xl:p-12">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <div className="w-8 h-8 bg-primary/20 rounded border-2 border-primary/40"></div>
                </div>
                <CardTitle className="text-xl font-serif">Vidros</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Box de banheiro, espelhos, janelas, guarda-corpos e envidraçamento sob medida com vidros temperados e
                  laminados.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Box de banheiro sob medida
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Espelhos decorativos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Guarda-corpos de vidro
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-blue-50 text-blue-900 border-blue-200 hover:bg-blue-200 hover:text-blue-900 rounded-md px-3 py-2 font-semibold transition-all duration-200" asChild>
                  <Link href="/servicos/vidros">Ver Detalhes</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Blinds Services */}
            <Card className="group border border-border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-300 bg-white/90 backdrop-blur h-full min-h-[370px] flex-1 flex flex-col justify-between p-8 md:p-10 xl:p-12">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <div className="space-y-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-8 h-1 bg-blue-400 rounded"></div>
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl font-serif text-gray-900">Persianas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base text-gray-700">
                  Rolô, romana, vertical, blackout e motorização para controle total da luminosidade em diversos
                  materiais e cores.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                    Persianas rolô e romana
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                    Modelos verticais
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                    Blackout e motorização
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-blue-50 text-blue-900 border-blue-200 hover:bg-blue-200 hover:text-blue-900 rounded-md px-3 py-2 font-semibold transition-all duration-200" asChild>
                  <Link href="/servicos/persianas">Ver Detalhes</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Mosquito Screens */}
            <Card className="group border border-border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-300 bg-white/90 backdrop-blur h-full min-h-[370px] flex-1 flex flex-col justify-between p-8 md:p-10 xl:p-12">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <div className="w-8 h-8 border-2 border-blue-400 rounded grid grid-cols-3 gap-px p-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="bg-blue-200 rounded-sm"></div>
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl font-serif text-gray-900">Telas Mosquiteiras</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base text-gray-700">
                  Modelos fixos, de correr e magnéticos para proteção contra insetos mantendo a ventilação natural.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                    Telas fixas e removíveis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                    Sistema magnético
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                    Proteção contra insetos
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-blue-50 text-blue-900 border-blue-200 hover:bg-blue-200 hover:text-blue-900 rounded-md px-3 py-2 font-semibold transition-all duration-200" asChild>
                  <Link href="/servicos/telas">Ver Detalhes</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Safety Nets */}
            <Card className="group border border-border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-300 bg-white/90 backdrop-blur h-full min-h-[370px] flex-1 flex flex-col justify-between p-8 md:p-10 xl:p-12">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <CardTitle className="text-xl font-serif text-gray-900">Redes de Proteção</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base text-gray-700">
                  Segurança para crianças e pets em janelas, sacadas e áreas abertas com redes resistentes e discretas.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                    Proteção para crianças
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                    Segurança para pets
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                    Redes discretas e resistentes
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-blue-50 text-blue-900 border-blue-200 hover:bg-blue-200 hover:text-blue-900 rounded-md px-3 py-2 font-semibold transition-all duration-200" asChild>
                  <Link href="/servicos/redes">Ver Detalhes</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Window Films */}
            <Card className="group border border-border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-300 bg-white/90 backdrop-blur h-full min-h-[370px] flex-1 flex flex-col justify-between p-8 md:p-10 xl:p-12">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-200 rounded border border-blue-200"></div>
                </div>
                <CardTitle className="text-xl font-serif text-gray-900">Películas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base text-gray-700">
                  Controle solar, segurança e privacidade com películas jateadas e espelhadas que protegem contra UV.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                    Controle solar e térmico
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                    Películas de segurança
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                    Proteção UV
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-blue-50 text-blue-900 border-blue-200 hover:bg-blue-200 hover:text-blue-900 rounded-md px-3 py-2 font-semibold transition-all duration-200" asChild>
                  <Link href="/servicos/peliculas">Ver Detalhes</Link>
                </Button>
              </CardContent>
            </Card>

            {/* CTA Card */}
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

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Qualidade Garantida</h3>
              <p className="text-muted-foreground">
                Utilizamos apenas materiais de primeira qualidade com garantia em todos os nossos serviços.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Empresa Familiar</h3>
              <p className="text-muted-foreground">
                Fundada por Valdimir e hoje dirigida pelos filhos Gabriel e Daniel Rodrigues.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Atendimento Personalizado</h3>
              <p className="text-muted-foreground">
                Cada projeto é único e recebe nossa atenção especial do orçamento à instalação.
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
