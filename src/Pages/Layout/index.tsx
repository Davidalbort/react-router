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
	const [alls, setAlls]=useState<TodoDefault>(TODO_DEFAULT)
	const handleSearch: StateLayout["handleSearch"] = (event) => {
		setSearch(event.target.value)
	}
	console.log(valueSearch)
	const filterAll = (inputSearch:StateLayout["inputValue"],alls:TodoDefault):TodoDefault => {
		const textSearch = inputSearch.toLowerCase()
		let newAlls: TodoDefault = []
		if(!textSearch){
			newAlls= alls
		}else{
			newAlls= alls.filter((product) =>{
				return product.text.toLocaleLowerCase().includes(valueSearch)
			})
		}
		return newAlls
	}
	const allSearch =filterAll(valueSearch,alls)
	const completedAll = (product:string):void => {
		const indexAll= alls.findIndex(all => (all.text=== product))
		const changeAll = [...alls]
		changeAll[indexAll].completed=true
		setAlls(changeAll)
	}
	const deleteAll = (product:string):void => {
		const changeAll= alls.filter(all => all.text !== product)
		setAlls(changeAll)
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
				deleted={deleteAll}
			/>
		</>
	)
}

export { Layout }