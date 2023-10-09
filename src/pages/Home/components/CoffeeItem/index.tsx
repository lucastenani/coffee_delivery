import { useState } from 'react'
import { ShoppingCart } from '@phosphor-icons/react'

import {
  AddToCart,
  CoffeeAmount,
  CoffeeBuy,
  CoffeeDescription,
  CoffeeImg,
  CoffeeItemContainer,
  CoffeePrice,
  CoffeeTag,
  CoffeeTitle,
} from './styles'

export function CoffeeItem() {
  const [coffeeAmount, setCoffeeAmount] = useState(1)

  function decrement() {
    if (coffeeAmount > 1) {
      setCoffeeAmount(coffeeAmount - 1)
    }
  }

  function increment() {
    if (coffeeAmount < 15) {
      setCoffeeAmount(coffeeAmount + 1)
    }
  }

  return (
    <CoffeeItemContainer>
      <CoffeeImg src="" alt="" />
      <CoffeeTag>TRADITIONAL</CoffeeTag>
      <CoffeeTitle>Espresso</CoffeeTitle>
      <CoffeeDescription>
        The traditional coffee made with hot water and ground beans.
      </CoffeeDescription>
      <CoffeeBuy>
        <CoffeePrice>
          <span>$</span> 1.90
        </CoffeePrice>

        <CoffeeAmount>
          <button id="decrement"> - </button>
          <input type="number" min={1} max={15} value={1} readOnly />
          <button id="increment"> + </button>
          <button onClick={decrement}>-</button>
          <input type="number" min={1} max={15} value={coffeeAmount} readOnly />
          <button onClick={increment}>+</button>
        </CoffeeAmount>

        <AddToCart>
          <ShoppingCart weight="fill" size={22} />
        </AddToCart>
      </CoffeeBuy>
    </CoffeeItemContainer>
  )
}
