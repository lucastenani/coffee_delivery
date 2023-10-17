import styled from 'styled-components'

export const CartItemContainer = styled.div`
  width: 100%;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
`

export const CartItemImg = styled.img`
  width: 100%;
  max-width: 4rem;
`

export const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme['base-subtitle']};
  }

  > div {
    display: flex;
    gap: 0.5rem;
  }
`

export const DeleItemButton = styled.button`
  background-color: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  span {
    color: ${(props) => props.theme['base-text']};
  }

  svg {
    color: ${(props) => props.theme.secondary};
  }
`

export const CartItemPrice = styled.p`
  flex: 1;

  font-weight: 700;
  text-align: right;
`
