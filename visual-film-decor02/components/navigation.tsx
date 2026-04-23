"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Instagram } from "lucide-react"
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
import { WhatsAppPopupButton } from "@/components/WhatsAppPopupButton";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-border shadow-lg rounded-b-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex flex-col gap-0 items-start">
              <span className="font-bold text-2xl tracking-tight">
                <span className="text-2xl font-serif text-foreground">Visual Film Decor</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-foreground px-3 py-1 rounded-md font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary">
              Início
            </Link>
            <Link href="/servicos" className="text-foreground px-3 py-1 rounded-md font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary">
              Serviços
            </Link>
            <Link href="/galeria" className="text-foreground px-3 py-1 rounded-md font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary">
              Galeria
            </Link>
            <Link href="/sobre" className="text-foreground px-3 py-1 rounded-md font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary">
              Sobre
            </Link>
            <Link href="/contato" className="text-foreground px-3 py-1 rounded-md font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary">
              Contato
            </Link>
          </nav>

          {/* Contact Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://instagram.com/visualfilmdecor"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white px-4 py-2 rounded-md flex items-center justify-center shadow-md hover:brightness-110 focus:outline-none focus:ring-0 border-0"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </a>
            </Button>
            <WhatsAppPopupButton
              buttonText="WhatsApp"
              buttonClassName="bg-gradient-to-tr from-green-500 to-green-700 text-white px-4 py-2 rounded-md flex items-center justify-center shadow-md hover:brightness-110 border-0"
              icon={<Phone className="w-4 h-4 mr-2" />}
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

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border">
            <nav className="py-4 space-y-4">
              <Link
                href="/"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/servicos"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="/galeria"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Galeria
              </Link>
              <Link
                href="/sobre"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/contato"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://instagram.com/visualfilmdecor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white px-4 py-2 rounded-md flex items-center justify-center shadow-md hover:brightness-110"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </a>
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" className="bg-gradient-to-tr from-green-500 to-green-700 text-white px-4 py-2 rounded-md flex items-center justify-center shadow-md hover:brightness-110 border-0">
                      <Phone className="w-4 h-4 mr-2" />
                      WhatsApp
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
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
