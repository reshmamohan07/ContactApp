
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../components/ContactList';
import { fetchAsynDeleteContacts } from '../store/reducers/contactReducer';

export const Home = () => {
    const contactsFromStore = useSelector(state => state.contactsList.contacts);
 const disptach = useDispatch();
    const removeContactHandler = (id) => {
       disptach( fetchAsynDeleteContacts(id) )

        // const newContactList = contacts.filter((contact) => {
        //     return contact.id !== id;
        // });
        // setContacts(newContactList);
    };

    return (
        <ContactList contacts={contactsFromStore}
            getContactId={removeContactHandler}
        />
    )

}