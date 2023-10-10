import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { SelectedCoffeesContextProvider } from './contexts/selectedCoffeesContext'
import { OrderContextProvider } from './contexts/OrderContext'
import { Router } from './Router'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <SelectedCoffeesContextProvider>
          <OrderContextProvider>
            <Router />
          </OrderContextProvider>
        </SelectedCoffeesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
