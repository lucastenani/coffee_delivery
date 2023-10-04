import { createContext, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { DeliveryAddressForm } from './components/DeliveryAddressForm'
import { SelectedCoffees } from './components/SelectedCoffees'

import {
  CheckoutContainer,
  ConfirmOrderButton,
  ConfirmOrderCard,
  ConfirmOrderContainer,
} from './styles'

type SelectedPaymentMethodType = 'creditCard' | 'debitCard' | 'cash'

interface AddressFormData {
  zipCode: number
  streetAddress: string
  streetNumber: number
  complement: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: SelectedPaymentMethodType
}

interface OrderContextData {
  deliveryAddress: AddressFormData | null
}

export const OrderContext = createContext({} as OrderContextData)

export function Checkout() {
  const [deliveryAddress, setDeliveryAddress] =
    useState<AddressFormData | null>(null)

  const NewOrderForm = useForm<AddressFormData>()

  const { handleSubmit } = NewOrderForm

  const navigate = useNavigate()

  function handleConfirmOrder(data: AddressFormData) {
    setDeliveryAddress(data)
  }

  useEffect(() => {
    if (deliveryAddress) {
      navigate('/success')
    }
  }, [deliveryAddress, navigate])

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleConfirmOrder)}>
        <OrderContext.Provider value={{ deliveryAddress }}>
          <FormProvider {...NewOrderForm}>
            <DeliveryAddressForm />
          </FormProvider>

          <ConfirmOrderContainer>
            <h2>Selected Coffees</h2>
            <ConfirmOrderCard>
              <SelectedCoffees />

              <ConfirmOrderButton type="submit">
                Confirm Order
              </ConfirmOrderButton>
            </ConfirmOrderCard>
          </ConfirmOrderContainer>
        </OrderContext.Provider>
      </form>
    </CheckoutContainer>
  )
}
