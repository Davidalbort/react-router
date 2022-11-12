import { TodoDefault } from "../../Pages/Layout"
import { Item } from "../Items"

interface PropsAllItems {
  products: TodoDefault
  completed: (text:string) => void
  deleted: (text:string) => void
}

const AllItems = ({products,completed,deleted}:PropsAllItems) => {
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
							handleDeleted={() => deleted(product.text)}
						/>

					))
				}
			</ul>
		</main>
	)
}
export { AllItems }