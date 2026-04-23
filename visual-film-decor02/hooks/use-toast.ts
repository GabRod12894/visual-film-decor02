// Indica que este hook é para uso no client-side (React Server Components)
"use client"

// Inspirado na biblioteca react-hot-toast
// Importa React para hooks e tipos
import * as React from "react"

// Importa tipos de toast para tipagem
import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

// Limite de toasts exibidos simultaneamente
const TOAST_LIMIT = 1
// Tempo para remover toast (em ms)
const TOAST_REMOVE_DELAY = 1000000

// Tipo do objeto toast
type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

// Tipos de ações possíveis para o toast
const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

// Contador para gerar IDs únicos
let count = 0

// Gera um ID único para cada toast
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

// Tipo para as ações
type ActionType = typeof actionTypes

// Estrutura das ações do reducer
type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

// Estado do reducer, lista de toasts
interface State {
  toasts: ToasterToast[]
}

// Map para controlar timeouts de remoção dos toasts
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

// Adiciona toast à fila de remoção após o tempo definido
const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

// Reducer para gerenciar estado dos toasts
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      // Adiciona novo toast e limita quantidade
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      // Atualiza toast existente
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // Adiciona à fila de remoção
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      // Marca toast como fechado
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      // Remove toast do estado
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

// Lista de listeners para atualização do estado
const listeners: Array<(state: State) => void> = []

// Estado em memória dos toasts
let memoryState: State = { toasts: [] }

// Dispara ação e atualiza todos os listeners
function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

// Tipo Toast sem o id
type Toast = Omit<ToasterToast, "id">

// Função para criar um novo toast
function toast({ ...props }: Toast) {
  const id = genId()

  // Função para atualizar toast
  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  // Função para fechar toast
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  // Adiciona toast ao estado
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

// Hook para acessar e manipular toasts
function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  // Adiciona/remover listener no ciclo de vida do componente
  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  // Retorna funções e estado para uso no componente
  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

// Exporta o hook e a função toast
export { useToast, toast }
