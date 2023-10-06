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
              <button id="decrement"> - </button>
              <input type="number" min={1} max={15} value={1} readOnly />
              <button id="increment"> + </button>
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
