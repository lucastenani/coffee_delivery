import { useContext } from 'react'
import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import CoffeeLogo from '../../assets/logo.svg'
import { CoffeesContext } from '../../contexts/CoffeesContext'

import {
  AmountOfItemsCart,
  CartContainer,
  HeaderContainer,
  LocationContainer,
} from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { coffeeCart } = useContext(CoffeesContext)
  const amountOfCartItems = coffeeCart.length

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={CoffeeLogo} alt="Coffee Delivery Logo" />
      </NavLink>

      <nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </LocationContainer>

        <CartContainer to="/checkout" title="My Cart">
          <ShoppingCartSimple size={22} weight="fill" />
          {amountOfCartItems > 0 ? (
            <AmountOfItemsCart>{amountOfCartItems}</AmountOfItemsCart>
          ) : (
            ''
          )}
        </CartContainer>
      </nav>
    </HeaderContainer>
  )
}
