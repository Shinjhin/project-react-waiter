import { Button } from "react-bootstrap";
import styles from './table.module.scss'

const Table = () => {
    return(
        <div className={styles.container}>
        <span ><h3 className={styles.inline}>Table 1</h3><p className={styles.inline}><span className={styles.status}>Status: </span>Busy</p></span>
        <Button>Show more</Button>
    </div>
    )
}

export default Table; 