import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'

import EmptyCartImg from '../../../../assets/empty-cart.webp'

import {
  CartWithItems,
  EmptyCartMessage,
  PriceDetails,
  TotalPriceContainer,
  TotalPriceSum,
} from './styles'
import { CartItem } from '../CartItem'

export function SelectedCoffees() {
  const { coffeeCart, coffeeCartAmount } = useContext(CoffeesContext)

  const isItemInCart = coffeeCartAmount > 0

  return (
    <>
      {isItemInCart ? (
        <CartWithItems>
          {coffeeCart.map((coffeeInfo) => {
            return (
              <CartItem
                coffeeInfo={coffeeInfo}
                key={coffeeInfo.coffee.id}
              ></CartItem>
            )
          })}
          <TotalPriceContainer>
            <PriceDetails>
              <p>Total Items</p>
              <span>$ 29.70</span>
            </PriceDetails>
            <PriceDetails>
              <p>Delivery</p>
              <span>$ 3.50</span>
            </PriceDetails>
            <TotalPriceSum>
              <p>Total</p>
              <p>$ 33.20</p>
            </TotalPriceSum>
          </TotalPriceContainer>
        </CartWithItems>
      ) : (
        <EmptyCartMessage>
          <img src={EmptyCartImg} alt="An empty and sad shopping cart" />
          <p>You haven not added any coffee to your cart yet</p>
          <Link to={'/'}>Click here to continue shopping</Link>
        </EmptyCartMessage>
      )}
    </>
  )
}
