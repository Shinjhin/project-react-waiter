import { useState } from 'react';
import styles from './billNumber.module.scss'

const BillNumber = props => {

    const [value, setValue] = useState(props.children);
    
    return(
        <span>
            $
            <input className={styles.input} type="number" min="0" value={value} onChange={e => setValue(e.target.value)}></input>
        </span>
    ) 
}

export default BillNumber; 