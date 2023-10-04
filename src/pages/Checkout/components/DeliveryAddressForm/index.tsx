import { Controller, useFormContext } from 'react-hook-form'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'

import {
  BaseInput,
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

export function DeliveryAddressForm() {
  const { register, control } = useFormContext()
  return (
    <FormContainer>
      <h1>Complete your order</h1>
      <FormCard>
        <FormCardText>
          <MapPinLine size={22} />
          <div>
            <p>Delivery Address</p>
            <span>
              Please provide the address where you want to receive your order
            </span>
          </div>
        </FormCardText>
        <FormCardAddress>
          <div>
            <MediumInput
              type="number"
              id="zipCode"
              placeholder="ZIP Code"
              required
              {...register('zipCode', {
                valueAsNumber: true,
              })}
            />
          </div>
          <div>
            <BaseInput
              type="text"
              id="streetAddress"
              placeholder="Street Address"
              required
              {...register('streetAddress', {})}
            />
          </div>
          <div>
            <MediumInput
              type="number"
              id="streetNumber"
              placeholder="Street Number"
              required
              {...register('streetNumber', { valueAsNumber: true })}
            />
            <OptionalLabel>
              <BaseInput
                type="text"
                id="complement"
                placeholder="Apartment, Suite, Unit"
                {...register('complement')}
              />
              <OptionalText>Optional</OptionalText>
            </OptionalLabel>
          </div>
          <div>
            <MediumInput
              type="text"
              id="neighborhood"
              placeholder="Neighborhood"
              required
              {...register('neighborhood')}
            />

            <BaseInput
              type="text"
              id="city"
              placeholder="City"
              required
              {...register('city')}
            />

            <SmallerInput
              type="text"
              id="state"
              placeholder="State"
              required
              {...register('state')}
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

        <Controller
          name="paymentMethod"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <PaymentMethods>
              <PaymentMethodLabel
                tabIndex={0}
                checked={field.value === 'creditCard'}
              >
                <input type="radio" {...field} value={'creditCard'} />
                <CreditCard size={16} />
                Credit Card
              </PaymentMethodLabel>
              <PaymentMethodLabel
                tabIndex={0}
                checked={field.value === 'debitCard'}
              >
                <input type="radio" {...field} value={'debitCard'} />
                <Bank size={16} />
                Debit Card
              </PaymentMethodLabel>
              <PaymentMethodLabel tabIndex={0} checked={field.value === 'cash'}>
                <input type="radio" {...field} value={'cash'} />
                <Money size={16} />
                Cash
              </PaymentMethodLabel>
            </PaymentMethods>
          )}
        />
      </PaymentFormCard>
    </FormContainer>
  )
}
