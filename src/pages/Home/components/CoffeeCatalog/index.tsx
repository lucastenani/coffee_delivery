import { useContext } from 'react'
import { CoffeeItem } from '../CoffeeItem'
import { CoffeeCatalogContainer, CoffeeMenu } from './styles'
import { SelectedCoffeesContext } from '../../../../contexts/selectedCoffeesContext'

export function OurCoffees() {
  const { coffeeList } = useContext(SelectedCoffeesContext)
  return (
    <CoffeeCatalogContainer>
      <h3>Our Coffees</h3>

      <CoffeeMenu>
        {coffeeList.map((coffee) => (
          <CoffeeItem key={coffee.id} coffeeInfo={coffee} />
        ))}
      </CoffeeMenu>
    </CoffeeCatalogContainer>
  )
}
