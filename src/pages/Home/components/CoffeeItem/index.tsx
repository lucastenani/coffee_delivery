import { useState } from 'react'
import { ShoppingCart } from '@phosphor-icons/react'
import { CoffeeListProps } from '../CoffeeCatalog'

import {
  AddToCart,
  CoffeeAmount,
  CoffeeBuy,
  CoffeeDescription,
  CoffeeImg,
  CoffeeItemContainer,
  CoffeePrice,
  CoffeeTags,
  CoffeeTitle,
} from './styles'

interface CoffeeItemProps {
  coffeeInfo: CoffeeListProps
}

export function CoffeeItem({ coffeeInfo }: CoffeeItemProps) {
  const [coffeeAmount, setCoffeeAmount] = useState(1)

  const { description, imagePath, name, price, tags } = coffeeInfo

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
      <CoffeeImg src={imagePath} alt={`${name} coffee image`} />

      <CoffeeTags>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CoffeeTags>

      <CoffeeTitle>{name}</CoffeeTitle>

      <CoffeeDescription>{description}</CoffeeDescription>

      <CoffeeBuy>
        <CoffeePrice>
          <span>$</span> {price}
        </CoffeePrice>

        <CoffeeAmount>
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
