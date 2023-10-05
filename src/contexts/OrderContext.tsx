import { ReactNode, createContext, useState } from 'react'

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

  function confirmOrder(data: AddressFormData) {
    setDeliveryAddress(data)
  }
  return (
    <OrderContext.Provider value={{ deliveryAddress, confirmOrder }}>
      {children}
    </OrderContext.Provider>
  )
}
