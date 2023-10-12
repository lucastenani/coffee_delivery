import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'

import EmptyCartImg from '../../../../assets/empty-cart.webp'

import { EmptyCartMessage } from './styles'

export function SelectedCoffees() {
  const { coffeeCartAmount } = useContext(CoffeesContext)

  const isItemInCart = coffeeCartAmount > 0

  return (
    <>
      {isItemInCart ? (
        'Has Item in Cart'
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
