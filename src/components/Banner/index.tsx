import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import coffeeCupImg from '../../assets/coffee-cup-image.png'
import {
  BannerContainer,
  IconArea,
  CoffeeCup,
  DeliveryDetailsContainer,
  OrderInfoBox,
  TextBannerContainer,
} from './styles'

export function Banner() {
  return (
    <BannerContainer>
      <TextBannerContainer>
        <article>
          <h1>Find the perfect coffee for any time of day</h1>
          <h2>
            With Coffee Delivery, you receive your coffee wherever you are,
            anytime
          </h2>
        </article>
        <DeliveryDetailsContainer>
          <OrderInfoBox>
            <IconArea iconcolor="yellow">
              <ShoppingCart size={16} weight="fill" />
            </IconArea>
            <span>Simple and secure purchase</span>
          </OrderInfoBox>
          <OrderInfoBox>
            <IconArea iconcolor="gray">
              <Package size={16} weight="fill" />
            </IconArea>
            <span>Packaging keeps the coffee intact</span>
          </OrderInfoBox>
          <OrderInfoBox>
            <IconArea iconcolor="yellowDark">
              <Timer size={16} weight="fill" />
            </IconArea>
            <span>Fast and tracked delivery</span>
          </OrderInfoBox>
          <OrderInfoBox>
            <IconArea iconcolor="purple">
              <Coffee size={16} weight="fill" />
            </IconArea>
            <span>Coffee arrives fresh to your doorstep</span>
          </OrderInfoBox>
        </DeliveryDetailsContainer>
      </TextBannerContainer>

      <CoffeeCup
        src={coffeeCupImg}
        alt="Image of a Coffee Delivery Cup surrounded by various coffee beans"
      />
    </BannerContainer>
  )
}
