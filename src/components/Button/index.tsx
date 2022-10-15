
import styles from './styles.module.css';

interface PropsButton {
  name: string
  handleClick: () => void
}
const Button = ({name,handleClick}: PropsButton) => {
  return(
    <button onClick={handleClick} className={styles.container}>
      {name}
    </button>
  )
}

export { Button };