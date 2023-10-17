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
  totalPrice: number
}

interface CoffeesContextData {
  coffeeList: CoffeeListProps[]
  coffeeCart: CoffeeCartProps[]
  coffeeCartAmount: number
  totalItemsPrice: string
  deliveryPrice: string
  totalOrderPrice: string
  addToCart: (selectedCoffee: CoffeeCartProps) => void
  currencyFormatter: (value: number) => string
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
    const id = selectedCoffee.coffee.id
    const isCoffeeInCart = coffeeCart.find((coffee) => coffee.coffee.id === id)

    if (!isCoffeeInCart) {
      setCoffeeCart((state) => [...state, selectedCoffee])
    } else {
      setCoffeeCart(
        coffeeCart.map((coffee) => {
          if (coffee.coffee.id === id) {
            const newAmount = coffee.amount + selectedCoffee.amount
            const newTotalPrice = coffee.totalPrice + selectedCoffee.totalPrice

            return { ...coffee, amount: newAmount, totalPrice: newTotalPrice }
          } else {
            return coffee
          }
        }),
      )
    }
  }

  function currencyFormatter(value: number) {
    return new Intl.NumberFormat('USD', {
      style: 'currency',
      currency: 'USD',
    }).format(value)
  }

  const coffeeCartAmount = coffeeCart.length

  const deliveryValue = 3.5

  let totalItemsValue = 0
  coffeeCart.map((item) => (totalItemsValue += item.totalPrice))

  const totalOrderValue = totalItemsValue + deliveryValue

  const deliveryPrice = currencyFormatter(3.5)
  const totalItemsPrice = currencyFormatter(totalItemsValue)
  const totalOrderPrice = currencyFormatter(totalOrderValue)

  useEffect(() => {
    fetch('/coffeeData.json')
      .then((response) => response.json())
      .then((data) => setCoffeeList(data))
  }, [])

  return (
    <CoffeesContext.Provider
      value={{
        coffeeList,
        addToCart,
        coffeeCart,
        coffeeCartAmount,
        totalItemsPrice,
        deliveryPrice,
        totalOrderPrice,
        currencyFormatter,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
