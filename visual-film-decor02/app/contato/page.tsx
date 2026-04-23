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
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, MessageCircle, Instagram, Mail, Clock, MapPin, CheckCircle, Send } from "lucide-react"
import Link from "next/link"

export default function ContatoPage() {
  return (
  <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              Atendimento Personalizado
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground text-balance">Entre em Contato</h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty">
              Estamos prontos para atender você e transformar seu espaço com mais de 30 anos de experiência e qualidade
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="text-center hover:shadow-lg transition-all hover:scale-105 group">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto group-hover:bg-green-200 transition-colors">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-serif">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Converse conosco diretamente e solicite seu orçamento de forma rápida e prática
                </CardDescription>
                <WhatsAppPopupButton
                  buttonText="Conversar no WhatsApp"
                  buttonClassName="w-full bg-green-600 hover:bg-green-700 text-white"
                  icon={<MessageCircle className="w-5 h-5 mr-2" />}
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
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all hover:scale-105 group">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto group-hover:from-pink-200 group-hover:to-purple-200 transition-colors">
                  <Instagram className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle className="text-xl font-serif">Instagram</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Siga-nos no Instagram e veja nossos trabalhos mais recentes e inspirações
                </CardDescription>
                <Button
                  size="lg"
                  className="w-full bg-blue-200 text-blue-900 border-blue-300 hover:bg-blue-300 hover:text-blue-900 shadow-md"
                  asChild
                >
                  <a href="https://instagram.com/visualfilmdecor" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5 mr-2 text-pink-600" />
                    Seguir no Instagram
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all hover:scale-105 group">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">E-mail</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Envie-nos um e-mail com detalhes do seu projeto para um atendimento personalizado
                </CardDescription>
                <Button
                  size="lg"
                  className="w-full bg-blue-200 text-blue-900 border-blue-300 hover:bg-blue-300 hover:text-blue-900 shadow-md"
                  asChild
                >
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=visualfilmdecoradm@gmail.com&su=Solicitação%20de%20Orçamento"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="w-5 h-5 mr-2 text-blue-900" />
                    Solicitar Orçamento pelo Gmail
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Solicite seu Orçamento</h2>
              <p className="text-xl text-muted-foreground">
                Preencha o formulário abaixo e entraremos em contato em breve
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-center">Formulário de Contato</CardTitle>
                <CardDescription className="text-center">
                  Quanto mais detalhes você fornecer, melhor poderemos atendê-lo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome completo *</Label>
                    <Input id="nome" placeholder="Seu nome completo" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                    <Input id="telefone" type="tel" placeholder="(61) 99999-9999" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cidade">Cidade *</Label>
                    <Input id="cidade" placeholder="Brasília, Teresina..." required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="servico">Serviço de interesse</Label>
                  <select
                    id="servico"
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="vidros">Vidros e Espelhos</option>
                    <option value="persianas">Persianas</option>
                    <option value="telas">Telas Mosquiteiras</option>
                    <option value="redes">Redes de Proteção</option>
                    <option value="peliculas">Películas</option>
                    <option value="multiplos">Múltiplos Serviços</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem *</Label>
                  <Textarea
                    id="mensagem"
                    placeholder="Descreva seu projeto, medidas aproximadas, prazo desejado e outras informações importantes..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button size="lg" className="w-full bg-blue-200 text-blue-900 border-blue-300 hover:bg-blue-300 hover:text-blue-900 shadow-md">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Solicitação
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Campos obrigatórios. Seus dados estão seguros conosco e não serão compartilhados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">Horário de Funcionamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Segunda a Sexta:</span>
                  <span className="text-muted-foreground">8h às 18h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sábado:</span>
                  <span className="text-muted-foreground">8h às 12h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Domingo:</span>
                  <span className="text-muted-foreground">Fechado</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-serif">Regiões Atendidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Brasília/DF</h4>
                  <p className="text-sm text-muted-foreground">Distrito Federal e entorno</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Teresina/PI</h4>
                  <p className="text-sm text-muted-foreground">Piauí e região metropolitana</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">Nossos Serviços</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Vidros e espelhos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Persianas e cortinas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Telas mosquiteiras
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Redes de proteção
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    Películas residenciais
                  </li>
                </ul>
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
              Pronto para começar seu projeto?
            </h2>
            <p className="text-xl text-white/90 text-pretty">
              Entre em contato conosco agora mesmo e receba um orçamento personalizado sem compromisso
            </p>
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
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                asChild
              >
                <Link href="/servicos">Ver Nossos Serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
