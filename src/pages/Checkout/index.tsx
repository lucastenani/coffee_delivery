import { useContext, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { AddressFormData, OrderContext } from '../../contexts/OrderContext'
import { DeliveryAddressForm } from './components/DeliveryAddressForm'
import { SelectedCoffees } from './components/SelectedCoffees'

import {
  CheckoutContainer,
  ConfirmOrderButton,
  ConfirmOrderCard,
  ConfirmOrderContainer,
} from './styles'

export function Checkout() {
  const { deliveryAddress, confirmOrder } = useContext(OrderContext)
  const { coffeeCartAmount } = useContext(CoffeesContext)

  const NewOrderForm = useForm<AddressFormData>()

  const { handleSubmit } = NewOrderForm

  const isItemInCart = coffeeCartAmount > 0

  const navigate = useNavigate()

  function handleConfirmOrder(data: AddressFormData) {
    confirmOrder(data)
  }

  useEffect(() => {
    if (deliveryAddress) {
      navigate('/success')
    }
  }, [deliveryAddress, navigate])

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleConfirmOrder)}>
        <FormProvider {...NewOrderForm}>
          <DeliveryAddressForm />
        </FormProvider>

        <ConfirmOrderContainer>
          <h2>Selected Coffees</h2>

          <ConfirmOrderCard>
            <SelectedCoffees />

            <ConfirmOrderButton type="submit" disabled={!isItemInCart}>
              Confirm Order
            </ConfirmOrderButton>
          </ConfirmOrderCard>
        </ConfirmOrderContainer>
      </form>
    </CheckoutContainer>
  )
}
