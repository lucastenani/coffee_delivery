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
