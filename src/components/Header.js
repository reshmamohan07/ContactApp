import { fetchAsyncRetrieveContacts,fetchAsynPostContacts } from "../store/reducers/contactReducer";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LS_CONTACTS_KEY } from "../constants/app.contants";
import { setContacts } from "../store/reducers/contactReducer";

const Header = () => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const lsContacts = localStorage.getItem(LS_CONTACTS_KEY);
    //     if (lsContacts) {
    //         dispatch(setContacts(JSON.parse(lsContacts)));
    //     }
    // }, []);
    //Async Thunk 
    useEffect(()=>{
        dispatch(fetchAsyncRetrieveContacts());
    },[])

    // useEffect(()=>{
    //     dispatch(fetchAsynPostContacts());
    // },[])

    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <h2>Contact Manager App</h2>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Contact List</Link></li>
                    <li><Link to="/add">Add Contacts</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;