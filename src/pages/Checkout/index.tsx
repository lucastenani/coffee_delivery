import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { DeliveryAddressForm } from './components/DeliveryAddressForm'
import { SelectedCoffees } from './components/SelectedCoffees'

import { CheckoutContainer } from './styles'

type SelectedPaymentMethodType = 'creditCard' | 'debitCard' | 'cash'

export interface AddressFormData {
  zipCode: number
  streetAddress: string
  streetNumber: number
  complement: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: SelectedPaymentMethodType
}

export function Checkout() {
  const [deliveryAddress, setDeliveryAddress] =
    useState<AddressFormData | null>(null)

  const { handleSubmit } = useForm<AddressFormData>()

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
        <DeliveryAddressForm />
        <SelectedCoffees />
      </form>
    </CheckoutContainer>
  )
}
