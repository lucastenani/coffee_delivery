import styled from 'styled-components'

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
