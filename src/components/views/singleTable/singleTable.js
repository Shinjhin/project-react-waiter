import { Button } from "react-bootstrap";
import BillNumber from "../../common/billNumber/billNumber";
import ClientsNumber from "../../common/clientsNumber/clientsNumber";
import Status from "../../common/status/status";
import styles from './singleTable.module.scss'

const SingleTable = () => {
    return (
        <div>
            <h1>Table 1</h1>
            <h5 className={styles.subtitle}>Status: <Status /></h5>
            <h5 className={styles.subtitle}>People: <ClientsNumber /> / <ClientsNumber /> </h5>
            <h5 className={styles.subtitle}>Bill: <BillNumber /></h5>
            <Button>Update</Button>
        </div>
    )
}

export default SingleTable; 