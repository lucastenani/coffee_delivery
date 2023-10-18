import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  addToCartAction,
  cleanCartAction,
  decrementAmountCoffeeAction,
  incrementAmountCoffeeAction,
  removeFromCartAction,
} from '../reducers/coffeeCart/actions'
import { coffeeCartReducer } from '../reducers/coffeeCart/reducer'

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
  cleanCart: () => void
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

  const [coffeeCart, dispatch] = useReducer(coffeeCartReducer, [], () => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:coffee-cart',
    )

    return storedStateAsJSON ? JSON.parse(storedStateAsJSON) : []
  })

  function addToCart(selectedCoffee: CoffeeCartProps) {
    const id = selectedCoffee.coffee.id
    const isCoffeeInCart = coffeeCart.find((coffee) => coffee.coffee.id === id)

    dispatch(addToCartAction(selectedCoffee, !!isCoffeeInCart, id))
  }

  function removeFromCart(id: number) {
    dispatch(removeFromCartAction(id))
  }

  function cleanCart() {
    dispatch(cleanCartAction())
  }

  function decrementCoffeeAmount(id: number) {
    dispatch(decrementAmountCoffeeAction(id))
  }

  function incrementCoffeeAmount(id: number) {
    dispatch(incrementAmountCoffeeAction(id))
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

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeeCart)

    localStorage.setItem('@coffee-delivery:coffee-cart', stateJSON)
  }, [coffeeCart])

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
        cleanCart,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
