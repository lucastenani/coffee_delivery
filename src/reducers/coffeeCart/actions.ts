import { CoffeeCartProps } from '../../contexts/CoffeesContext'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  DECREMENT_AMOUNT_COFFEE = 'DECREMENT_AMOUNT_COFFEE',
  INCREMENT_AMOUNT_COFFEE = 'INCREMENT_AMOUNT_COFFEE',
}

export function addToCartAction(
  selectedCoffee: CoffeeCartProps,
  isCoffeeInCart: boolean,
  id: number,
) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: { selectedCoffee, isCoffeeInCart, id },
  }
}

export function removeFromCartAction(id: number) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: { id },
  }
}

export function decrementAmountCoffeeAction(id: number) {
  return {
    type: ActionTypes.DECREMENT_AMOUNT_COFFEE,
    payload: { id },
  }
}

export function incrementAmountCoffeeAction(id: number) {
  return {
    type: ActionTypes.INCREMENT_AMOUNT_COFFEE,
    payload: { id },
  }
}
