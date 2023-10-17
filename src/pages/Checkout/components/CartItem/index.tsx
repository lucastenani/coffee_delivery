import { useContext } from 'react'
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
  const {
    currencyFormatter,
    removeFromCart,
    decrementCoffeeAmount,
    incrementCoffeeAmount,
  } = useContext(CoffeesContext)

  const { coffee, totalPrice, amount } = coffeeInfo

  function handleDecrementAmount() {
    event?.preventDefault()

    decrementCoffeeAmount(coffee.id)
  }

  function handleIncrementAmount() {
    event?.preventDefault()

    incrementCoffeeAmount(coffee.id)
  }

  function handleRemoveFromCart() {
    event?.preventDefault()

    removeFromCart(coffee.id)
  }

  return (
    <CartItemContainer>
      <CartItemImg src={coffee.imagePath} alt={`${coffee.name} coffee image`} />

      <CartItemDetails>
        <p>{coffee.name}</p>
        <div>
          <CoffeeAmount>
            <button onClick={handleDecrementAmount}>-</button>
            <span>{amount}</span>
            <button onClick={handleIncrementAmount}>+</button>
          </CoffeeAmount>

          <DeleItemButton onClick={handleRemoveFromCart}>
            <Trash size={16} /> <span>Remove</span>
          </DeleItemButton>
        </div>
      </CartItemDetails>

      <CartItemPrice>{currencyFormatter(totalPrice)}</CartItemPrice>
    </CartItemContainer>
  )
}
