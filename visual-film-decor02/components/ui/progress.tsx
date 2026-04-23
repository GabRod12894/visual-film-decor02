// Indica que este componente é client-side
"use client"

// Importa React para componentes e hooks
import * as React from "react"
// Importa componentes de progresso da Radix UI
import * as ProgressPrimitive from "@radix-ui/react-progress"

// Importa função utilitária para classes CSS
import { cn } from "@/lib/utils"

// Componente de barra de progresso
function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    // Container da barra de progresso
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      {/* Indicador de progresso */}
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

// Exporta o componente Progress
export { Progress }
