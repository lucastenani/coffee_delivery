import { Link } from 'react-router-dom'

import EmptyCartImg from '../../../../assets/empty-cart.webp'

import { EmptyCartMessage } from './styles'

export function SelectedCoffees() {
  return (
    <EmptyCartMessage>
      <img src={EmptyCartImg} alt="An empty and sad shopping cart" />
      <p>You haven not added any coffee to your cart yet</p>
      <Link to={'/'}>Click here to continue shopping</Link>
    </EmptyCartMessage>
  )
}
