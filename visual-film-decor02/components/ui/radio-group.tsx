// Indica que este componente é client-side
"use client"

// Importa React para componentes e hooks
import * as React from "react"
// Importa componentes de radio da Radix UI
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
// Importa ícone de círculo para o radio
import { CircleIcon } from "lucide-react"

// Importa função utilitária para classes CSS
import { cn } from "@/lib/utils"

// Componente de grupo de radio
function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    // Container do grupo de radio
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

// Componente de item do grupo de radio
function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    // Item do radio
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {/* Indicador do radio (círculo preenchido) */}
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

// Exporta os componentes RadioGroup e RadioGroupItem
export { RadioGroup, RadioGroupItem }
