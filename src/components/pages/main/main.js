import Tables from "../../views/tables/tables";
import styles from './main.module.scss'

const Main = () => {
    return(
        <div>
            <p>Witamy na głównej stronie!</p>
            <h2 className={styles.title}>All tables</h2>
            <Tables />
        </div>
    )
}
export default Main;