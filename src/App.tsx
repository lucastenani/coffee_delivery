import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { CoffeesContextProvider } from './contexts/CoffeesContext'
import { OrderContextProvider } from './contexts/OrderContext'
import { Router } from './Router'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesContextProvider>
          <OrderContextProvider>
            <Router />
          </OrderContextProvider>
        </CoffeesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
