// Importa React para hooks
import * as React from "react"

// Define o breakpoint para mobile (em pixels)
const MOBILE_BREAKPOINT = 768

// Hook para detectar se está em tela mobile
export function useIsMobile() {
  // Estado para saber se é mobile
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  // Efeito para atualizar estado ao mudar tamanho da tela
  React.useEffect(() => {
    // Cria media query para mobile
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    // Função chamada ao mudar tamanho
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    // Adiciona listener
    mql.addEventListener("change", onChange)
    // Atualiza estado inicial
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    // Remove listener ao desmontar
    return () => mql.removeEventListener("change", onChange)
  }, [])

  // Retorna se é mobile (true/false)
  return !!isMobile
}
