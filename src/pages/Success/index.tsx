import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { OrderContext } from '../../contexts/OrderContext'
import DeliveryOnTheWay from '../../assets/delivery-on-the-way.png'

import {
  DeliveryImg,
  DeliveryInfo,
  DeliveryInfoBox,
  OrderDetailsContainer,
  OrderDetailsText,
  SuccessContainer,
} from './styles'

import { IconArea } from '../../layouts/DefaultLayout/styles'

export function Success() {
  const { deliveryAddress } = useContext(OrderContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!deliveryAddress) {
      navigate('/')
    }
  }, [deliveryAddress, navigate])

  return (
    <SuccessContainer>
      <OrderDetailsContainer>
        <OrderDetailsText>
          <h1>Yay! Order Confirmed</h1>
          <h2>Now just wait, your coffee will arrive soon</h2>
        </OrderDetailsText>

        <DeliveryInfo>
          <DeliveryInfoBox>
            <IconArea iconcolor="purple">
              <MapPin size={16} weight="fill" />
            </IconArea>
            <div>
              <p>Delivery to </p>
              <span>
                {deliveryAddress?.streetNumber} {deliveryAddress?.streetAddress}{' '}
                {deliveryAddress?.complement},
              </span>
              <p>
                {deliveryAddress?.city}, {deliveryAddress?.state}{' '}
                {deliveryAddress?.zipCode}
              </p>
            </div>
          </DeliveryInfoBox>

          <DeliveryInfoBox>
            <IconArea iconcolor="yellowDark">
              <Timer size={16} weight="fill" />
            </IconArea>
            <div>
              <p>Estimated delivery time</p>
              <span>20 min - 30 min</span>
            </div>
          </DeliveryInfoBox>

          <DeliveryInfoBox>
            <IconArea iconcolor="yellow">
              <CurrencyDollar size={16} />
            </IconArea>
            <div>
              <p>Payment on delivery </p>
              <span>{deliveryAddress?.paymentMethod}</span>
            </div>
          </DeliveryInfoBox>
        </DeliveryInfo>
      </OrderDetailsContainer>

      <DeliveryImg>
        <img
          src={DeliveryOnTheWay}
          alt="Image of a delivery person on a motorcycle carrying coffee"
        />
      </DeliveryImg>
    </SuccessContainer>
  )
}
