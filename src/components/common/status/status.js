import { useSelector } from 'react-redux';
import styles from './status.module.scss'

const Status = props => {

  const x = useSelector(state => state.options);
  console.log('x', x);

  return(
    <select className={styles.select}>
      <option>{props.children}</option>
        {x.map(it => <option>{it.op}</option>)}      
    </select>
  )
}

export default Status;