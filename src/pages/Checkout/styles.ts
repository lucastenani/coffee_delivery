import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  form {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  h1,
  h2 {
    font-family: ${(props) => props.theme.baloo};
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
    flex: 1;

    @media (max-width: 768px) {
      max-width: none;
    }
  }
`

export const baseCard = styled.article`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
`

export const ConfirmOrderContainer = styled.section`
  max-width: 28rem;
`

export const ConfirmOrderCard = styled(baseCard)`
  border-radius: 6px 44px;
  gap: 1.5rem;
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
