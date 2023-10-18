import { ReactNode, createContext, useContext, useState } from 'react'
import { CoffeesContext } from './CoffeesContext'

type SelectedPaymentMethodType = 'Credit Card' | 'Debit Card' | 'Cash'

export interface AddressFormData {
  zipCode: number
  streetAddress: string
  streetNumber: number
  complement?: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: SelectedPaymentMethodType
}

interface OrderContextData {
  deliveryAddress: AddressFormData | null
  confirmOrder: (data: AddressFormData) => void
}

interface OrderContextProviderProps {
  children: ReactNode
}

export const OrderContext = createContext({} as OrderContextData)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [deliveryAddress, setDeliveryAddress] =
    useState<AddressFormData | null>(null)

  const { cleanCart } = useContext(CoffeesContext)

  function confirmOrder(data: AddressFormData) {
    setDeliveryAddress(data)
    cleanCart()
  }

  return (
    <OrderContext.Provider value={{ deliveryAddress, confirmOrder }}>
      {children}
    </OrderContext.Provider>
  )
}
