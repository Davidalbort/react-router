import { TodoDefault } from "../../Pages/Layout"
import { Item } from "../Items"

interface PropsAllItems {
  products: TodoDefault
  completed: (text:string) => void
}

const AllItems = ({products,completed}:PropsAllItems) => {
	return(
		<main>
			<ul>
				{
					products && products.map(product =>(
						<Item
							key={product.text}
							allText={product.text}
							completed={product.completed}
							handleCompleted={(() => completed(product.text))}
						/>

					))
				}
			</ul>
		</main>
	)
}
export { AllItems }