import Link from "next/link"
import { Phone, Instagram, Clock, MapPin } from "lucide-react"
import { WhatsAppPopupButton } from "@/components/WhatsAppPopupButton"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">VF</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Visual Film Decor</h3>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformando lares com qualidade e confiança desde 1994. Especialistas em vidros, persianas, telas, redes
              e películas.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/visualfilmdecor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <WhatsAppPopupButton
                buttonText=""
                buttonClassName="text-muted-foreground hover:text-primary transition-colors p-0 bg-transparent border-none shadow-none hover:bg-transparent focus:bg-transparent inline-flex items-center justify-center h-5 w-5"
                icon={<Phone className="w-5 h-5" />}
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

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-foreground">Nossos Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicos/vidros" className="text-muted-foreground hover:text-primary transition-colors">
                  Vidros e Espelhos
                </Link>
              </li>
              <li>
                <Link href="/servicos/persianas" className="text-muted-foreground hover:text-primary transition-colors">
                  Persianas
                </Link>
              </li>
              <li>
                <Link href="/servicos/telas" className="text-muted-foreground hover:text-primary transition-colors">
                  Telas Mosquiteiras
                </Link>
              </li>
              <li>
                <Link href="/servicos/redes" className="text-muted-foreground hover:text-primary transition-colors">
                  Redes de Proteção
                </Link>
              </li>
              <li>
                <Link href="/servicos/peliculas" className="text-muted-foreground hover:text-primary transition-colors">
                  Películas
                </Link>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-foreground flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Horário de Funcionamento
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong>Segunda a Sexta:</strong> 8h às 18h
              </p>
              <p>
                <strong>Sábado:</strong> 8h às 12h
              </p>
              <p>
                <strong>Domingo:</strong> Fechado
              </p>
            </div>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-foreground flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Regiões Atendidas
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong>Brasília/DF</strong>
              </p>
              <p>Distrito Federal e entorno</p>
              <p>
                <strong>Teresina/PI</strong>
              </p>
              <p>Piauí e região metropolitana</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2024 Visual Film Decor. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
