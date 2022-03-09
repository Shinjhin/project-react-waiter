import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from './table.module.scss';

const Table = () => {

    const tables = useSelector(state => state.tables)

    return(
        <> {tables.length > 0 &&
                <div>
                    {tables.map(table =>
                        <div className={styles.container}>
                            <span >
                                <h3 className={styles.inline}>Table {table.id}</h3>
                                <p className={styles.inline}><span className={styles.status}>Status: </span>{table.status} </p>
                            </span>
                            <NavLink className={styles.link + ' btn btn-primary'} to={`/tables/${table.id}`}>Show more</NavLink>
                        </div>)}
                </div>
            }
            {tables.length === 0 && <p>Loading...</p>}
        </>
    )
}

export default Table;