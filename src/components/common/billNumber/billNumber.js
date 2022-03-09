import styles from './billNumber.module.scss'

const BillNumber = () => {
    return(
        <span>
            $
            <input className={styles.input} type="number" min="0"></input>
        </span>
    ) 
}

export default BillNumber; 