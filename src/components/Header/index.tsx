import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import CoffeeLogo from '../../assets/logo.svg'
import { CoffeesContext } from '../../contexts/CoffeesContext'

import {
  AmountOfItemsCart,
  CartContainer,
  HeaderContainer,
  LocationContainer,
} from './styles'

export function Header() {
  const { coffeeCartAmount } = useContext(CoffeesContext)
  const isItemInCart = coffeeCartAmount > 0

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
          {isItemInCart ? (
            <AmountOfItemsCart>{coffeeCartAmount}</AmountOfItemsCart>
          ) : (
            ''
          )}
        </CartContainer>
      </nav>
    </HeaderContainer>
  )
}
