import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import user from '../images/userimage.png';
export const ContactDetails = () => {

    let location = useLocation();
    let { chummaid: contactId } = useParams();


    const contactListFetch = useSelector(state => state.contactsList.contacts);
    const contactDetails = contactListFetch.find((item) => item.id === contactId);
    return (
        <>
            <div className="main">
                <div className="ui card centered">
                    <img className="image" src={user} alt="user" />
                    <div className="content">
                        <div className="header">{contactDetails?.name}</div>
                        <div>{contactDetails?.email}</div>
                    </div>
                </div>
                </div>
                <div className="center-div">
                    <Link to="/">
                        <button className="ui button blue center back-button">
                            Back to Add ContactList
                        </button>
                    </Link>
                </div>
        
        </>
    )
}