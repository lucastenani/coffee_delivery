import styled from 'styled-components'

export const CoffeeItemContainer = styled.article`
  width: 15rem;
  height: 19.375rem;

  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};
  padding: 0 1.5rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 525px) {
    max-width: none;
    width: 100%;
  }
`

export const CoffeeImg = styled.img`
  max-width: 7.5rem;
  margin-bottom: 1rem;
  margin-top: -2.5rem;
`

export const CoffeeTags = styled.div`
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;

  span {
    background-color: ${(props) => props.theme['yellow-light']};
    border-radius: 100px;
    padding: 0.25rem 0.5rem;

    font-size: 0.625rem;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
    color: ${(props) => props.theme['primary-hover']};
  }
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
