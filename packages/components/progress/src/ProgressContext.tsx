import { createContext, useContext } from 'react'

export interface ProgressContextValue {
  value: number
  onLabelId: (id: string | undefined) => void
}

export const ProgressContext = createContext<ProgressContextValue | null>(null)

export const useProgress = () => {
  const context = useContext(ProgressContext)

  if (!context) {
    throw new Error('useProgress must be used within a Progress provider')
  }

  return context
}
