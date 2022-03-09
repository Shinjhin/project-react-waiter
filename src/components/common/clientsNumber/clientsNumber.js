import { useState } from 'react';
import styles from './clientsNumber.module.scss'

const ClientsNumber = props => {

    const val = props.children;
    const [value, setValue] = useState(val);

    return (
        <input className={styles.input} type="number" min="0" max="10" value={value} onChange={e => setValue(e.target.value)}></input>
    )
}

export default ClientsNumber; 