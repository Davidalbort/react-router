import { useState } from "react"

interface StateAllSearch {
  inputValue: string
}

const AllSearch = () => {
  const [valueSearch,SetSearch]=useState<StateAllSearch['inputValue']>('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    SetSearch(value)
  }
  console.log(valueSearch)
  return(
    <form action="">
      <input type="search" value={valueSearch} onChange={handleChange}/>
    </form>
  )
}

export { AllSearch }