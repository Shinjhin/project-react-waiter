import Tables from "../../views/tables/tables";
import styles from './main.module.scss'

const Main = () => {
    return(
        <div>
            <h2 className={styles.title}>All tables</h2>
            <Tables />
        </div>
    )
}
export default Main;