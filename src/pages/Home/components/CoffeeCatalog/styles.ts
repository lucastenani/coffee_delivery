import styled from 'styled-components'

export const CoffeeCatalogContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: ${(props) => props.theme.baloo};
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
  }
`
export const CoffeeMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2.5rem 2rem;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`

export const CoffeeItem = styled.article`
  flex: 0 0 calc(25% - 2rem);
  max-width: 13rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex: 0 0 calc(33.3% - 2rem);
  }

  @media (max-width: 525px) {
    flex: 1;
  }
`

export const CoffeeImg = styled.img`
  max-width: 7.5rem;
  margin-bottom: 0.75rem;
`

export const CoffeeTag = styled.span`
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;
  padding: 0.25rem 0.5rem;
  margin-bottom: 1rem;

  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  color: ${(props) => props.theme['primary-hover']};
`

export const CoffeeTitle = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  text-align: center;
  font-family: ${(props) => props.theme.baloo};
  font-size: 1.25rem;
  line-height: 130%;

  margin-bottom: 0.5rem;
`

export const CoffeeDescription = styled.p`
  color: ${(props) => props.theme['base-label']};
  text-align: center;
  font-size: 0.875rem;
  line-height: 130%;

  margin-bottom: 2rem;
`

export const CoffeeBuy = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`

export const CoffeePrice = styled.p`
  flex: 1;
  font-family: ${(props) => props.theme.baloo};
  font-size: 1.5rem;

  span {
    font-family: ${(props) => props.theme.roboto};
    font-size: 0.875rem;
  }
`

export const CoffeeAmount = styled.div`
  background-color: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  border: 0;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  button,
  input {
    background-color: transparent;
    border: 0;
  }

  button {
    color: ${(props) => props.theme['secondary-hover']};
    font-size: 1.3rem;

    cursor: pointer;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    color: ${(props) => props.theme['base-title']};
    text-align: center;

    -moz-appearance: textfield;
  }
`

export const AddToCart = styled.button`
  background-color: ${(props) => props.theme['secondary-hover']};
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;

  width: 2.375rem;
  height: 2.375rem;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.white};
  }
`
