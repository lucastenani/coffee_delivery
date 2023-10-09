import { useState } from 'react'
import { ShoppingCart } from '@phosphor-icons/react'
import traditionalCoffee from '../../../../assets/espresso.png'

import {
  AddToCart,
  CoffeeAmount,
  CoffeeBuy,
  CoffeeCatalogContainer,
  CoffeeDescription,
  CoffeeImg,
  CoffeeItem,
  CoffeeMenu,
  CoffeePrice,
  CoffeeTag,
  CoffeeTitle,
} from './styles'

export function CoffeeCatalog() {
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
    <CoffeeCatalogContainer>
      <h3>Our Coffees</h3>

      <CoffeeMenu>
        <CoffeeItem>
          <CoffeeImg src={traditionalCoffee} alt="" />

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
              <button onClick={decrement}>-</button>
              <input
                type="number"
                min={1}
                max={15}
                value={coffeeAmount}
                readOnly
              />
              <button onClick={increment}>+</button>
            </CoffeeAmount>

            <AddToCart>
              <ShoppingCart weight="fill" size={22} />
            </AddToCart>
          </CoffeeBuy>
        </CoffeeItem>
      </CoffeeMenu>
    </CoffeeCatalogContainer>
  )
}
