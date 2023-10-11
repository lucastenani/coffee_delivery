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
  coffee: CoffeeListProps
  amount: number
}

interface CoffeesContextData {
  coffeeList: CoffeeListProps[]
  coffeeCart: CoffeeCartProps[]
  addToCart: (selectedCoffee: CoffeeCartProps) => void
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextData)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeeList, setCoffeeList] = useState<CoffeeListProps[]>([])
  const [coffeeCart, setCoffeeCart] = useState<CoffeeCartProps[]>([])

  function addToCart(selectedCoffee: CoffeeCartProps) {
    // const id = selectedCoffee.coffee.id
    // const isCoffeeInCart = coffeeCart.find((coffee) => coffee.coffee.id === id)

    setCoffeeCart((state) => [...state, selectedCoffee])
    console.log(coffeeCart)
  }

  useEffect(() => {
    fetch('/coffeeData.json')
      .then((response) => response.json())
      .then((data) => setCoffeeList(data))
  }, [])

  return (
    <CoffeesContext.Provider value={{ coffeeList, addToCart, coffeeCart }}>
      {children}
    </CoffeesContext.Provider>
  )
}
