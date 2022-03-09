import styles from './clients.module.scss'

const Clients = props => {

    return (
        <input className={styles.input} type="number" min="0" max="10" value={props.value} onChange={props.onChange}></input>
    )
}

export default Clients;