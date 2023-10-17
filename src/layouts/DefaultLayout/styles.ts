import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 1rem 8rem;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

const ICON_COLOR = {
  yellow: 'primary-hover',
  yellowDark: 'primary',
  gray: 'base-subtitle',
  purple: 'secondary',
}

interface IconProps {
  iconcolor: keyof typeof ICON_COLOR
}

export const IconArea = styled.div<IconProps>`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme[ICON_COLOR[props.iconcolor]]};

  height: 2rem;
  padding: 0.5rem;
  border-radius: 50%;
`

export const CoffeeAmount = styled.div`
  width: 4.5rem;
  background-color: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  border: 0;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  button {
    background-color: transparent;
    border: 0;
  }

  button {
    color: ${(props) => props.theme.secondary};
    font-size: 1.3rem;

    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['secondary-hover']};
    }
  }

  span {
    color: ${(props) => props.theme['base-title']};
    text-align: center;
    cursor: default;
  }
`
