import { useContext, useState } from 'react'
import { ShoppingCart } from '@phosphor-icons/react'
import {
  CoffeeCartProps,
  CoffeeListProps,
  CoffeesContext,
} from '../../../../contexts/CoffeesContext'

import { CoffeeAmount } from '../../../../layouts/DefaultLayout/styles'

import {
  AddToCart,
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
  const { addToCart } = useContext(CoffeesContext)

  const { description, imagePath, name, price, tags } = coffeeInfo

  function decrement() {
    if (coffeeAmount > 1) {
      setCoffeeAmount((state) => state - 1)
    }
  }

  function increment() {
    if (coffeeAmount < 15) {
      setCoffeeAmount((state) => state + 1)
    }
  }

  function handleAddToCart() {
    const selectedCoffee: CoffeeCartProps = {
      coffee: coffeeInfo,
      amount: coffeeAmount,
      totalPrice: coffeeInfo.price * coffeeAmount,
    }

    addToCart(selectedCoffee)
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
          <span>{coffeeAmount}</span>
          <button onClick={increment}>+</button>
        </CoffeeAmount>

        <AddToCart onClick={handleAddToCart}>
          <ShoppingCart weight="fill" size={22} />
        </AddToCart>
      </CoffeeBuy>
    </CoffeeItemContainer>
  )
}
