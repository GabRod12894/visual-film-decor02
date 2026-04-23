import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import React from "react";

interface WhatsAppContact {
  label: string;
  phone: string;
  link: string;
}

interface WhatsAppPopupButtonProps {
  buttonText?: string;
  buttonClassName?: string;
  contacts: WhatsAppContact[];
  description?: string;
  icon?: React.ReactNode;
}

export const WhatsAppPopupButton: React.FC<WhatsAppPopupButtonProps> = ({
  buttonText = "Solicitar Orçamento",
  buttonClassName = "bg-green-600 hover:bg-green-700 text-white shadow-lg",
  contacts = [
    {
      label: "Atendimento Brasília",
      phone: "+55 61 98598-1075",
      link: "https://wa.me/5561985981075",
    },
    {
      label: "Atendimento Teresina",
      phone: "+55 86 99843-1002",
      link: "https://wa.me/5586998431002",
    },
  ],
  description = "Escolha abaixo para ser direcionado ao WhatsApp do atendimento de Brasília ou Teresina.",
  icon = <Phone className="w-5 h-5 mr-2" />,
}) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button size="lg" className={buttonClassName}>
        {icon}
        {buttonText}
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Selecione a cidade para contato</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-4 mt-6">
        {contacts.map((contact) => (
          <Button
            key={contact.label}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white"
            asChild
          >
            <a href={contact.link} target="_blank" rel="noopener noreferrer">
              {contact.label}
              <br />
              <span className="text-xs">{contact.phone}</span>
            </a>
          </Button>
        ))}
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancelar</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
