import { CoffeeItem } from '../CoffeeItem'
import { CoffeeCatalogContainer, CoffeeMenu } from './styles'

export function OurCoffees() {
  return (
    <CoffeeCatalogContainer>
      <h3>Our Coffees</h3>

      <CoffeeMenu>
        <CoffeeItem />
      </CoffeeMenu>
    </CoffeeCatalogContainer>
  )
}
