import { useEffect, useState } from 'react'
import { CoffeeItem } from '../CoffeeItem'
import { CoffeeCatalogContainer, CoffeeMenu } from './styles'

export interface CoffeeListProps {
  id: number
  imagePath: string
  tags: string[]
  name: string
  description: string
  price: number
}

export function OurCoffees() {
  const [coffeeList, setCoffeeList] = useState<CoffeeListProps[]>([])

  useEffect(() => {
    fetch('/coffeeData.json')
      .then((response) => response.json())
      .then((data) => setCoffeeList(data))
  }, [])

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
