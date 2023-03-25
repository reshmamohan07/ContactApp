import React from 'react';
import { useDispatch } from 'react-redux';
import AddContact from '../components/AddContact';
import { addContact, fetchAsynPostContacts } from '../store/reducers/contactReducer';
// import AddContacts from '../pages/AddContact.js';

export const AddContactsPage = () => {
    const dispatch = useDispatch();

    const addContactHandler = (contact) => {
        // dispatch(addContact(contact));
        dispatch(fetchAsynPostContacts(contact))
    };
    return (<AddContact addContactHandler={addContactHandler} />);
}