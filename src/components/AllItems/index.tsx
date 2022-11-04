import { Item } from "../Items"

const AllItems = () => {
  return(
    <main>
      <Item
        allText="Compra manzanas"
        completed={false}
      />
    </main>
  )
}
export { AllItems }