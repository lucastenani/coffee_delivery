import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { ActionTypes, coffeeCartReducer } from '../reducers/coffeeCart'

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
  removeFromCart: (id: number) => void
  decrementCoffeeAmount: (id: number) => void
  incrementCoffeeAmount: (id: number) => void
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

  const [coffeeCart, dispatch] = useReducer(coffeeCartReducer, [])

  function addToCart(selectedCoffee: CoffeeCartProps) {
    const id = selectedCoffee.coffee.id
    const isCoffeeInCart = coffeeCart.find((coffee) => coffee.coffee.id === id)

    dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload: { selectedCoffee, isCoffeeInCart, id },
    })
  }

  function removeFromCart(id: number) {
    dispatch({
      type: ActionTypes.REMOVE_FROM_CART,
      payload: { id },
    })
  }

  function decrementCoffeeAmount(id: number) {
    dispatch({
      type: ActionTypes.DECREMENT_AMOUNT_COFFEE,
      payload: { id },
    })
  }

  function incrementCoffeeAmount(id: number) {
    dispatch({
      type: ActionTypes.INCREMENT_AMOUNT_COFFEE,
      payload: { id },
    })
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
        removeFromCart,
        decrementCoffeeAmount,
        incrementCoffeeAmount,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
