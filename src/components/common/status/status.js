import { useSelector } from 'react-redux';
import styles from './status.module.scss'

const Status = props => {

  const x = useSelector(state => state.options);
  console.log('x', x);

  return(
    <select className={styles.select} onChange={props.onChange} value={props.value || props.defaultValue }>>
        {x.map(it => <option>{it.op}</option>)}      
    </select>
  )
}

export default Status;