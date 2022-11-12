import { BsCheckLg } from "react-icons/bs"
import {AiOutlineDelete} from "react-icons/ai"

interface PropsItem {
  allText: string
  completed: boolean
  handleCompleted: () => void
  handleDeleted: () => void
}

const Item = ({allText,completed,handleCompleted,handleDeleted}:PropsItem) => {
 
	return(
		<li className="flex justify-between items-center px-2 w-auto h-6 bg-slate-500 mb-1">
			<BsCheckLg
				className={completed ? "text-lime-300 cursor-pointer":"text-black cursor-pointer"}
				onClick={handleCompleted}
			/>
			<p className={completed ? "line-through" : ""}>
				{allText}
			</p>
			<AiOutlineDelete
				className={ "text-red-600 cursor-pointer"}
				onClick={handleDeleted}
			/>


		</li>

	)
}

export { Item }