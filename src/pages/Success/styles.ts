import styled from 'styled-components'

export const SuccessContainer = styled.main`
  margin-top: 2.5rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 6.375rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`

export const OrderDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  flex: 1;
`

export const OrderDetailsText = styled.article`
  h1 {
    color: ${(props) => props.theme['primary-hover']};
    font-family: ${(props) => props.theme.baloo};
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
  }

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 130%;
  }
`

export const DeliveryInfo = styled.article`
  padding: 2.5rem;
  border-radius: 6px 36px;
  border: 1px solid ${(props) => props.theme.primary};

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const DeliveryInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > div {
    display: flex;
    flex-direction: column;
  }

  span {
    font-weight: 700;
  }
`

export const DeliveryImg = styled.section`
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 30.75rem;
  }
`
