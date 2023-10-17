import styled from 'styled-components'

export const CartWithItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TotalPriceContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.937rem;
`

export const PriceDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 0.875rem;
  }
`

export const TotalPriceSum = styled(PriceDetails)`
  p {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }
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
