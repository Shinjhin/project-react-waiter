import { useSelector } from 'react-redux';
import styles from './status.module.scss'

const Status = props => {

    const x = useSelector(state => state.options);

    return(
        <select className={styles.select} onChange={props.onChange} value={props.value}>
        {x.map(it => 
            <option>{it.op}</option>)}  
        </select>
    )
}

export default Status;
