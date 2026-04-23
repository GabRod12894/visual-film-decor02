// Importa a função clsx para manipulação de classes CSS
import { clsx, type ClassValue } from "clsx"
// Importa a função twMerge para mesclar classes do Tailwind
import { twMerge } from "tailwind-merge"

// Função utilitária para juntar classes CSS, removendo duplicadas do Tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)) // Retorna string de classes mescladas
}
