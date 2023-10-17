import { useContext, useState } from 'react'
import { Trash } from '@phosphor-icons/react'
import {
  CoffeeCartProps,
  CoffeesContext,
} from '../../../../contexts/CoffeesContext'

import { CoffeeAmount } from '../../../../layouts/DefaultLayout/styles'
import {
  CartItemContainer,
  CartItemDetails,
  CartItemImg,
  CartItemPrice,
  DeleItemButton,
} from './styles'

interface CartItemProps {
  coffeeInfo: CoffeeCartProps
}

export function CartItem({ coffeeInfo }: CartItemProps) {
  const { currencyFormatter } = useContext(CoffeesContext)
  const { amount, coffee, totalPrice } = coffeeInfo
  const [coffeeAmount, setCoffeeAmount] = useState(amount)

  function decrement() {
    if (coffeeAmount > 1) {
      event?.preventDefault()
      setCoffeeAmount(coffeeAmount - 1)
    }
  }

  function increment() {
    if (coffeeAmount < 15) {
      event?.preventDefault()
      setCoffeeAmount(coffeeAmount + 1)
    }
  }
  return (
    <CartItemContainer>
      <CartItemImg src={coffee.imagePath} alt={`${coffee.name} coffee image`} />

      <CartItemDetails>
        <p>{coffee.name}</p>
        <div>
          <CoffeeAmount>
            <button onClick={decrement}>-</button>
            <span>{coffeeAmount}</span>
            <button onClick={increment}>+</button>
          </CoffeeAmount>

          <DeleItemButton>
            <Trash size={16} /> <span>Remove</span>
          </DeleItemButton>
        </div>
      </CartItemDetails>

      <CartItemPrice>{currencyFormatter(totalPrice)}</CartItemPrice>
    </CartItemContainer>
  )
}
