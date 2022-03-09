import styles from './status.module.scss'

const Status = () => {
    return(
            <select className={styles.select}>
                <option>Busy</option>
                <option>Free</option>
                <option>Reserved</option>
                <option>Cleaning</option>
            </select>
    )
}

export default Status;