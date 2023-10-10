import { ReactNode, createContext, useEffect, useState } from 'react'

export interface CoffeeListProps {
  id: number
  imagePath: string
  tags: string[]
  name: string
  description: string
  price: number
  value: string
}

interface SelectedCoffeesContextProviderProps {
  children: ReactNode
}

interface SelectedCoffeesContextData {
  coffeeList: CoffeeListProps[]
}

export const SelectedCoffeesContext = createContext(
  {} as SelectedCoffeesContextData,
)

export function SelectedCoffeesContextProvider({
  children,
}: SelectedCoffeesContextProviderProps) {
  const [coffeeList, setCoffeeList] = useState<CoffeeListProps[]>([])

  useEffect(() => {
    fetch('/coffeeData.json')
      .then((response) => response.json())
      .then((data) => setCoffeeList(data))
  }, [])

  return (
    <SelectedCoffeesContext.Provider value={{ coffeeList }}>
      {children}
    </SelectedCoffeesContext.Provider>
  )
}
