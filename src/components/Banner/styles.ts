import styled from 'styled-components'

export const BannerContainer = styled.section`
  margin-top: 3.375rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const TextBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;

  article:first-child {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      color: ${(props) => props.theme['base-title']};
      font-family: ${(props) => props.theme.baloo};
      font-size: 3rem;
      font-weight: 800;
      line-height: 3.9rem;
    }

    h2 {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.625rem;
    }
  }
`

export const DeliveryDetailsContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`

export const OrderInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    font-size: 1rem;
  }
`

export const CoffeeCup = styled.img`
  width: 100%;
  max-width: 29.75rem;
`
