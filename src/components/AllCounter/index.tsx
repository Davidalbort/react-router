interface PropsTodoCounter {
  totalAll : number
  completedAll: number
}

const AllCounter = ({totalAll,completedAll}:PropsTodoCounter) => {
  return(
    <header>
      <h1>Todo List</h1>
      <p>You have completed {completedAll} of {totalAll} </p>
    </header>
  )
}

export { AllCounter }