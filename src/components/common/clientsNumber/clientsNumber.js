import styles from './clientsNumber.module.scss'

const ClientsNumber = () => {
    return (
        <input className={styles.input} type="number" min="0" max="10"></input>
    )
}

export default ClientsNumber; 