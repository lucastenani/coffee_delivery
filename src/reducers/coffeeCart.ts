import { CoffeeCartProps } from '../contexts/CoffeesContext'

export function coffeeCartReducer(state: CoffeeCartProps[], action: any) {
  const selectedCoffee = action.payload.selectedCoffee

  switch (action.type) {
    case 'ADD_TO_CART':
      if (!action.payload.isCoffeeInCart) {
        return [...state, action.payload.selectedCoffee]
      } else {
        return state.map((itemCart) => {
          if (itemCart.coffee.id === action.payload.id) {
            const newAmount = itemCart.amount + selectedCoffee.amount
            const newTotalPrice =
              itemCart.totalPrice + selectedCoffee.totalPrice

            return {
              ...itemCart,
              amount: newAmount,
              totalPrice: newTotalPrice,
            }
          } else {
            return itemCart
          }
        })
      }

    case 'REMOVE_FROM_CART':
      return state.filter((coffee) => coffee.coffee.id !== action.payload.id)

    case 'DECREMENT_AMOUNT_COFFEE':
      return state
        .map((itemCart) => {
          if (itemCart.coffee.id === action.payload.id) {
            const newAmount = itemCart.amount - 1
            const newTotalPrice = itemCart.totalPrice - itemCart.coffee.price

            return {
              ...itemCart,
              amount: newAmount,
              totalPrice: newTotalPrice,
            }
          } else {
            return itemCart
          }
        })
        .filter((coffee) => coffee.amount > 0)
    case 'INCREMENT_AMOUNT_COFFEE':
      return state.map((itemCart) => {
        if (itemCart.coffee.id === action.payload.id) {
          const newAmount = itemCart.amount + 1
          const newTotalPrice = itemCart.totalPrice + itemCart.coffee.price

          return {
            ...itemCart,
            amount: newAmount,
            totalPrice: newTotalPrice,
          }
        } else {
          return itemCart
        }
      })
    default:
      return state
  }
}
