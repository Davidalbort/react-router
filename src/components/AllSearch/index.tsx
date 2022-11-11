import { useState } from "react"

interface PropsAllSearch {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  valueSearch: string
}
interface StateAllSearch {
  inputValue: string
}

const AllSearch = ({handleChange,valueSearch}:PropsAllSearch) => {
	return(
		<form action="">
			<input type="search" value={valueSearch} onChange={handleChange}/>
		</form>
	)
}

export { AllSearch }