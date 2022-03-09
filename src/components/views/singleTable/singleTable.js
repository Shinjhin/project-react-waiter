import { Button } from "react-bootstrap";
import BillNumber from "../../common/billNumber/billNumber";
import ClientsNumber from "../../common/clientsNumber/clientsNumber";
import Status from "../../common/status/status";
import styles from './singleTable.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router';
import { useState } from "react";
import { updateInfo } from "../../../redux/tablesRedux";
import { NavLink } from "react-router-dom";

const SingleTable = () => {

    const tables = useSelector (state => state.tables)
    const { id } = useParams();
    const wynik = tables.filter(table => table.id === id).length >0;
    if (!wynik) {

    }

    const dispatch = useDispatch();
    const [status, setStatus] = useState('');
    const [bill, setBill] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateInfo({ id, status, bill }))
    }
    
    return (
        <div>
            {tables.filter(table => table.id === id).map(table => 
                <div>
                    <h1>Table {table.id}</h1>
                    <h5 className={styles.subtitle}>Status: <Status value={status} onChange={e => {setStatus(e.target.value)}} defaultValue={table.status}> {table.status}</Status></h5>
                    <h5 className={styles.subtitle}>People: <ClientsNumber>{table.peopleAmount}</ClientsNumber> / <ClientsNumber>{table.maxPeopleAmount}</ClientsNumber> </h5>
                    <h5 className={styles.subtitle}>Bill: <BillNumber defaultValue={table.bill} value={bill || table.bill} onChange={(e) => setBill(e.target.value)} ></BillNumber></h5>
                    <Button onClick={handleSubmit}><NavLink className={styles.navLink} to="/"> Update</NavLink></Button>
                </div>          
            )}
        </div>
    )
}

export default SingleTable; 