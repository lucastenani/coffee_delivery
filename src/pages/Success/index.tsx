import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
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
              <p>
                Delivery to 20 <span>W 34th St.</span>,
              </p>
              <p>New York, NY 10001</p>
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
              <span>Credit Card</span>
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
