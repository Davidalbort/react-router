import { AllCounter } from "../../components/AllCounter";
import { AllItems } from "../../components/AllItems";
import { AllSearch } from "../../components/AllSearch";




const HomePage = () => {
  return(
    <>
      <h1>HomePage</h1>
      <AllCounter 
        totalAll={4}
        completedAll={2}
      />
      <AllSearch />
      <AllItems />
    </>
  )
}


export { HomePage };