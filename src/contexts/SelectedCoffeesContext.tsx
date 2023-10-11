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

export interface CoffeeCartProps {
  coffe: CoffeeListProps
  amount: number
}

interface SelectedCoffeesContextData {
  coffeeList: CoffeeListProps[]
  coffeeCart: CoffeeCartProps[]
  addToCart: (selectedCoffee: CoffeeCartProps) => void
}

interface SelectedCoffeesContextProviderProps {
  children: ReactNode
}

export const SelectedCoffeesContext = createContext(
  {} as SelectedCoffeesContextData,
)

export function SelectedCoffeesContextProvider({
  children,
}: SelectedCoffeesContextProviderProps) {
  const [coffeeList, setCoffeeList] = useState<CoffeeListProps[]>([])
  const [coffeeCart, setCoffeeCart] = useState<CoffeeCartProps[]>([])

  function addToCart(selectedCoffee: CoffeeCartProps) {
    setCoffeeCart((state) => [...state, selectedCoffee])
  }

  useEffect(() => {
    fetch('/coffeeData.json')
      .then((response) => response.json())
      .then((data) => setCoffeeList(data))
  }, [])

  return (
    <SelectedCoffeesContext.Provider
      value={{ coffeeList, addToCart, coffeeCart }}
    >
      {children}
    </SelectedCoffeesContext.Provider>
  )
}
