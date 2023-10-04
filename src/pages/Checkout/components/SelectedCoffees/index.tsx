import { Link } from 'react-router-dom'

import EmptyCartImg from '../../../../assets/empty-cart.webp'

import {
  ConfirmOrderButton,
  ConfirmOrderCard,
  ConfirmOrderContainer,
  EmptyCartMessage,
} from './styles'

export function SelectedCoffees() {
  return (
    <ConfirmOrderContainer>
      <h2>Selected Coffees</h2>
      <ConfirmOrderCard>
        <EmptyCartMessage>
          <img src={EmptyCartImg} alt="" />
          <p>You haven not added any coffee to your cart yet</p>
          <Link to={'/'}>Click here to continue shopping</Link>
        </EmptyCartMessage>
        <ConfirmOrderButton type="submit">Confirm Order</ConfirmOrderButton>
      </ConfirmOrderCard>
    </ConfirmOrderContainer>
  )
}
