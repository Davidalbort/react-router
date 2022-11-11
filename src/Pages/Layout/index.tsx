import { useState, useEffect} from "react"
import { AllCounter } from "../../components/AllCounter"
import { AllItems } from "../../components/AllItems"
import { AllSearch } from "../../components/AllSearch"

export type TodoDefault = {
    text: string
    completed: boolean
}[]

interface StateLayout {
    inputValue: string
    valueSearch:string
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
    filterAll: (inputSearch:string,TODO_DEFAULT:TodoDefault) =>TodoDefault
}

const TODO_DEFAULT : TodoDefault = [
	{
		text: "Comprar manzanas",
		completed: false
	},
	{
		text: "Vender peras",
		completed: false
	},
	{
		text: "Votar bananos",
		completed: false
	},
	{
		text: "Regalar manzanas",
		completed: false
	}
]
const Layout = () => {
	const [valueSearch,setSearch]=useState<StateLayout["inputValue"]>("")
	const handleSearch: StateLayout["handleSearch"] = (event) => {
		setSearch(event.target.value)
	}
	console.log(valueSearch)
	const filterAll = (inputSearch:StateLayout["inputValue"],TODO_DEFAULT:TodoDefault):TodoDefault => {
		const textSearch = inputSearch.toLowerCase()
		let newAll: TodoDefault = []
		if(!textSearch){
			newAll= TODO_DEFAULT
		}else{
			newAll= TODO_DEFAULT.filter((product) =>{
				return product.text.toLocaleLowerCase().includes(valueSearch)
			})
		}
		return newAll
	}
	const allSearch =filterAll(valueSearch,TODO_DEFAULT)
	const completedAll = (product:string):void => {
		alert(product)
	}
	return (
		<>
			<AllCounter
				totalAll={4}
				completedAll={2}
			/>
			<AllSearch 
				valueSearch={valueSearch}
				handleChange={handleSearch}
			/>
			<AllItems 
				products={allSearch}
				completed={completedAll}
			/>
		</>
	)
}

export { Layout }