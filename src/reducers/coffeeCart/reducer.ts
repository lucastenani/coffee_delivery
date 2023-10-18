import { produce } from 'immer'
import { CoffeeCartProps } from '../../contexts/CoffeesContext'
import { ActionTypes } from './actions'

export function coffeeCartReducer(state: CoffeeCartProps[], action: any) {
  if (action.type === ActionTypes.CLEAN_CART) {
    return produce(state, (draft) => {
      draft.splice(0, draft.length)
    })
  }

  const selectedCoffee: CoffeeCartProps = action.payload.selectedCoffee
  const indexItem = state.findIndex((cartItem) => {
    return cartItem.coffee.id === action.payload.id
  })

  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      if (!action.payload.isCoffeeInCart) {
        return produce(state, (draft) => {
          draft.push(action.payload.selectedCoffee)
        })
      } else {
        if (indexItem < 0) {
          return state
        }

        return produce(state, (draft) => {
          draft[indexItem].amount += selectedCoffee.amount
          draft[indexItem].totalPrice += selectedCoffee.totalPrice
        })
      }

    case ActionTypes.REMOVE_FROM_CART:
      return produce(state, (draft) => {
        draft.splice(indexItem, 1)
      })

    case ActionTypes.DECREMENT_AMOUNT_COFFEE:
      if (indexItem < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft[indexItem].amount -= 1
        draft[indexItem].totalPrice -= draft[indexItem].coffee.price
        if (draft[indexItem].amount <= 0) {
          draft.splice(indexItem, 1)
        }
      })

    case ActionTypes.INCREMENT_AMOUNT_COFFEE:
      if (indexItem < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft[indexItem].amount += 1
        draft[indexItem].totalPrice += draft[indexItem].coffee.price
      })
    default:
      return state
  }
}
