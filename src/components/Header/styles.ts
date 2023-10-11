import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const LocationContainer = styled.div`
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['secondary-hover']};
  padding: 0.5rem;
  border-radius: 6px;
  cursor: default;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme.secondary};
  }
`

export const CartContainer = styled(NavLink)`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['primary-hover']};
  padding: 0.5rem;
  border-radius: 6px;
  position: relative;
`

export const AmountOfItemsCart = styled.span`
  background-color: ${(props) => props.theme['primary-hover']};
  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;

  width: 1.25rem;
  padding: 0.2rem;

  border-radius: 50%;

  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`
