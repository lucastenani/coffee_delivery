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

  height: 32px;
  padding: 0.5rem;
  border-radius: 50%;
`
