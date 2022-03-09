import styles from './maxClients.module.scss'

const MaxClients = props => {

    return (
        <input className={styles.input} type="number" min="0" max="10" value={props.value} onChange={props.onChange}></input>
    )
}

export default MaxClients; 