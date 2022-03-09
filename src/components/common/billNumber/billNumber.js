import { useState } from 'react';
import styles from './billNumber.module.scss'

const BillNumber = props => {
    
    return(
        <span>
            $
            <input className={styles.input} type="number" min="0" value={props.value} onChange={props.onChange}></input>
        </span>
    ) 
}

export default BillNumber; 