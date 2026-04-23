"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Grid, Eye } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { WhatsAppPopupButton } from "@/components/WhatsAppPopupButton";

export default function GaleriaPage() {
  const [filtro, setFiltro] = useState("Todos")

  const cards = [
    {
      categoria: "Vidros",
      img: "/BoxBanheiro.png",
      alt: "Box de banheiro em vidro temperado instalado",
      titulo: "Box de Banheiro",
      descricao: "Vidro temperado 8mm"
    },
    {
      categoria: "Vidros",
      img: "/envidracamentoVaranda.png",
      alt: "Envidraçamento de varanda",
      titulo: "Envidraçamento",
      descricao: "Varanda integrada"
    },
    {
      categoria: "Vidros",
      img: "/espelhoDecorativo.png",
      alt: "Espelho decorativo instalado",
      titulo: "Espelho Decorativo",
      descricao: "Acabamento bisotê"
    },
    {
      categoria: "Vidros",
      img: "/guardaCorpoDeVidro.png",
      alt: "Guarda-corpo de vidro em escada",
      titulo: "Guarda-corpo",
      descricao: "Vidro temperado laminado"
    },
    {
      categoria: "Persianas",
      img: "/PersianaRolo.png",
      alt: "Persiana rolô instalada em sala de estar",
      titulo: "Persiana Rolô",
      descricao: "Sala de estar moderna"
    },
    {
      categoria: "Persianas",
      img: "/persianaBlackOut.png",
      alt: "Persiana blackout instalada",
      titulo: "Persiana Blackout",
      descricao: "Escurecimento total"
    },
    {
      categoria: "Persianas",
      img: "/persianaVerticalEscritório.png",
      alt: "Persiana vertical em escritório",
      titulo: "Persiana Vertical",
      descricao: "Ambiente corporativo"
    },
    {
      categoria: "Telas",
      img: "/TelaMosquiteira.png",
      alt: "Tela mosquiteira em janela de quarto",
      titulo: "Tela Mosquiteira",
      descricao: "Proteção contra insetos"
    },
    {
      categoria: "Telas",
      img: "/mosquiteiraMagnetica.png",
      alt: "Tela mosquiteira magnética",
      titulo: "Tela Magnética",
      descricao: "Fechamento automático"
    },
    {
      categoria: "Redes",
      img: "/RedeDeProtecao.png",
      alt: "Rede de proteção instalada em sacada",
      titulo: "Rede de Proteção",
      descricao: "Segurança para crianças"
    },
    {
      categoria: "Redes",
      img: "/telaParaPets.png",
      alt: "Rede de proteção para pets",
      titulo: "Proteção para Pets",
      descricao: "Segurança animal"
    },
    {
      categoria: "Películas",
      img: "/window-film-solar-control.png",
      alt: "Película solar aplicada em janela",
      titulo: "Película Solar",
      descricao: "Controle térmico"
    }
  ]

  const categorias = ["Todos", "Vidros", "Persianas", "Telas", "Redes", "Películas"]
  const cardsFiltrados = filtro === "Todos" ? cards : cards.filter(card => card.categoria === filtro)

  return (
  <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              Mais de 1000 projetos realizados
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground text-balance drop-shadow-lg">
              Nossos Trabalhos
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty">
              Veja alguns dos projetos que realizamos com excelência e dedicação ao longo de mais de 30 anos de
              experiência
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-card/80 border-b border-border backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categorias.map(cat => (
              <Button
                key={cat}
                size="sm"
                className={cat === "Vidros" || cat === "Persianas" || cat === "Telas" || cat === "Redes" || cat === "Películas" ? "bg-blue-200 text-blue-900 border-blue-300 hover:bg-blue-300 hover:text-blue-900 shadow-md" : "bg-blue-200 text-blue-900 border-blue-300 hover:bg-blue-300 hover:text-blue-900 shadow-md"}
                onClick={() => setFiltro(cat)}
              >
                {cat === "Todos" && <Grid className="w-4 h-4 mr-2" />}
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-10 text-center drop-shadow">
            Galeria de Projetos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cardsFiltrados.map((card, idx) => (
              <div key={idx} className="group relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 hover:shadow-lg transition-all duration-300">
                <img src={card.img} alt={card.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge variant="secondary" className="mb-2">{card.categoria}</Badge>
                  <h3 className="font-semibold text-sm">{card.titulo}</h3>
                  <p className="text-xs text-white/80">{card.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className="py-20 bg-gradient-to-br from-black via-blue-900 to-blue-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white text-balance drop-shadow-lg">
              Gostou do que viu?
            </h2>
            <p className="text-xl text-white/90 text-pretty">
              Entre em contato conosco e transforme seu espaço também com a qualidade e experiência da Visual Film Decor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppPopupButton
                buttonText="Solicitar Orçamento"
                buttonClassName="bg-green-600 hover:bg-green-700 text-white shadow-lg"
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
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 shadow-md"
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
