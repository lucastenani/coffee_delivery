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

export const FormContainer = styled.section`
  max-width: 40rem;
`

export const FormCard = styled(baseCard)`
  gap: 2rem;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme['primary-hover']};
  }
`

export const FormCardText = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
  }

  span {
    font-size: 0.875rem;
    line-height: 130%;
  }
`

export const FormCardAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
`

export const BaseInput = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
  flex: 1;
  font-size: 0.875rem;
`

export const SmallerInput = styled(BaseInput)`
  max-width: 4rem;
`
export const MediumInput = styled(BaseInput)`
  max-width: 12.5rem;

  @media (max-width: 425px) {
    max-width: none;
  }
`

export const OptionalLabel = styled.div`
  flex: 1;
  position: relative;
`

export const OptionalText = styled.span`
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-label']};
  position: absolute;
  font-style: italic;
  top: 0.8rem;
  right: 0.5rem;
`

export const PaymentFormCard = styled(FormCard)`
  svg {
    color: ${(props) => props.theme.secondary};
  }
`

export const PaymentMethods = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 425px) {
    flex-direction: column;
  }

  input {
    display: none;
  }

  input[type='radio']:checked + label {
    background-color: ${(props) => props.theme.white};
  }
`
interface PaymentMethodProps {
  checked: boolean
}

export const PaymentMethodLabel = styled.label<PaymentMethodProps>`
  flex: 1;
  font-size: 0.75rem;
  text-transform: uppercase;
  padding: 1rem;
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  background-color: ${(props) =>
    props.checked ? props.theme['purple-light'] : props.theme['base-button']};

  border: ${(props) =>
    props.checked ? `1px solid ${props.theme.secondary}` : 0};

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.secondary};
  }
`

export const ConfirmOrderContainer = styled.section`
  max-width: 28rem;
`

export const ConfirmOrderCard = styled(baseCard)`
  border-radius: 6px 44px;
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
