import Table from "../../views/table/table";
import styles from './main.module.scss'

const Main = () => {
    return(
        <div>
            <p>Witamy na głównej stronie!</p>
            <h2 className={styles.title}>All tables</h2>
            <Table />
            <Table />
            <Table />
            <Table />
        </div>
    )
}
export default Main;