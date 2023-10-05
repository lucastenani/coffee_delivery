import { Banner } from './components/Banner'
import { CoffeeCatalog } from './components/CoffeeCatalog'

import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <CoffeeCatalog />
    </HomeContainer>
  )
}
