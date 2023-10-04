import styled from 'styled-components'

import { baseCard } from '../../styles'

export const ConfirmOrderContainer = styled.section`
  max-width: 28rem;
`

export const ConfirmOrderCard = styled(baseCard)`
  border-radius: 6px 44px;
  gap: 2rem;
`

export const EmptyCartMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  img {
    width: 100%;
  }

  p {
    font-size: 0.875rem;
    text-align: center;
  }

  a {
    font-weight: 700;
    color: ${(props) => props.theme['primary-hover']};
    text-decoration: none;
  }
`

export const ConfirmOrderButton = styled.button`
  padding: 0.75rem 0.5rem;
  border: 0;
  border-radius: 6px;

  font-size: 0.875rem;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;

  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['primary-hover']};
  }
`
