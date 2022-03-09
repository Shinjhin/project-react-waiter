import { Button } from "react-bootstrap";
import BillNumber from "../../common/billNumber/billNumber";
import ClientsNumber from "../../common/clientsNumber/clientsNumber";
import Status from "../../common/status/status";
import styles from './singleTable.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router';
import { useState } from "react";
import { updateStatus } from "../../../redux/tablesRedux";

const SingleTable = () => {

    const tables = useSelector (state => state.tables)
    const { id } = useParams();

    const dispatch = useDispatch();
    const [status, setStatus] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateStatus({ id, status }))
    }
    
    return (
        <div>
            {tables.filter(table => table.id === id).map(table => 
                <div>
                    <h1>Table {table.id}</h1>
                    <h5 className={styles.subtitle}>Status: <Status value={status} onChange={e => {setStatus(e.target.value)}}> {table.status}</Status></h5>
                    <h5 className={styles.subtitle}>People: <ClientsNumber>{table.peopleAmount}</ClientsNumber> / <ClientsNumber>{table.maxPeopleAmount}</ClientsNumber> </h5>
                    <h5 className={styles.subtitle}>Bill: <BillNumber>{table.bill}</BillNumber></h5>
                    <Button onClick={handleSubmit}>Update</Button>
                </div>      
            )}
        </div>
    )
}

export default SingleTable; 