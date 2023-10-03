import { ChangeEvent, useState } from 'react'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'

import {
  BaseInput,
  CheckoutContainer,
  ConfirmOrderButton,
  ConfirmOrderCard,
  ConfirmOrderContainer,
  FormCard,
  FormCardAddress,
  FormCardText,
  FormContainer,
  MediumInput,
  OptionalLabel,
  OptionalText,
  PaymentFormCard,
  PaymentMethodLabel,
  PaymentMethods,
  SmallerInput,
} from './styles'

type SelectedPaymentMethodType = 'creditCard' | 'debitCard' | 'cash'

export function Checkout() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<SelectedPaymentMethodType>('creditCard')

  const handlePaymentMethodChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value as SelectedPaymentMethodType
    setSelectedPaymentMethod(selectedValue)
  }

  return (
    <CheckoutContainer>
      <form>
        <FormContainer>
          <h1>Complete your order</h1>
          <FormCard>
            <FormCardText>
              <MapPinLine size={22} />
              <div>
                <p>Delivery Address</p>
                <span>
                  Please provide the address where you want to receive your
                  order
                </span>
              </div>
            </FormCardText>
            <FormCardAddress>
              <div>
                <MediumInput
                  type="number"
                  name="zipCode"
                  id="zipCode"
                  placeholder="ZIP Code"
                  required
                />
              </div>
              <div>
                <BaseInput
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  placeholder="Street Address"
                  required
                />
              </div>
              <div>
                <MediumInput
                  type="number"
                  name="streetNumber"
                  id="streetNumber"
                  placeholder="Street Number"
                  required
                />
                <OptionalLabel>
                  <BaseInput
                    type="text"
                    name="complement"
                    id="complement"
                    placeholder="Apartment, Suite, Unit"
                  />
                  <OptionalText>Optional</OptionalText>
                </OptionalLabel>
              </div>
              <div>
                <MediumInput
                  type="text"
                  name="neighborhood"
                  id="neighborhood"
                  placeholder="Neighborhood"
                  required
                />

                <BaseInput
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  required
                />

                <SmallerInput
                  type="text"
                  name="state"
                  id="state"
                  placeholder="State"
                  required
                />
              </div>
            </FormCardAddress>
          </FormCard>
          <PaymentFormCard>
            <FormCardText>
              <CurrencyDollar size={22} />
              <div>
                <p>Payment</p>
                <span>
                  Payment is made upon delivery. Choose your preferred payment
                  method
                </span>
              </div>
            </FormCardText>
            <PaymentMethods>
              <PaymentMethodLabel
                tabIndex={1}
                checked={selectedPaymentMethod === 'creditCard'}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  onChange={handlePaymentMethodChange}
                  defaultChecked
                  required
                />
                <CreditCard size={16} />
                Credit Card
              </PaymentMethodLabel>
              <PaymentMethodLabel
                tabIndex={2}
                checked={selectedPaymentMethod === 'debitCard'}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="debitCard"
                  onChange={handlePaymentMethodChange}
                  required
                />
                <Bank size={16} />
                Debit Card
              </PaymentMethodLabel>
              <PaymentMethodLabel
                tabIndex={3}
                checked={selectedPaymentMethod === 'cash'}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  onChange={handlePaymentMethodChange}
                  required
                />
                <Money size={16} />
                Cash
              </PaymentMethodLabel>
            </PaymentMethods>
          </PaymentFormCard>
        </FormContainer>
        <ConfirmOrderContainer>
          <h2>Selected Coffees</h2>
          <ConfirmOrderCard>
            <ConfirmOrderButton type="submit">Confirm Order</ConfirmOrderButton>
          </ConfirmOrderCard>
        </ConfirmOrderContainer>
      </form>
    </CheckoutContainer>
  )
}
