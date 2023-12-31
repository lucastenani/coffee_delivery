import styled from 'styled-components'

export const CoffeeCatalogContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;

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
  gap: 3.5rem 2rem;

  @media (max-width: 525px) {
    justify-content: center;
  }
`
