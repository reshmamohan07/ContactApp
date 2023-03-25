import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

const AddContact = ({ addContactHandler }) => {
    const [state, setState] = useState({
        name: "",
        email: ""
    });
    const add = (e) => {
        e.preventDefault();
        if (!state.name && state.email?.trim() === "") {
            alert("All the fields are mandatory!!! ");
            return;
        }
        addContactHandler({ ...state, id: uuid() });
        setState({ name: "", email: "" });
    }

    // console.log(state);

    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form addContactForm" onSubmit={add}>
                <div className="field">
                    <label>Name</label>
                    <input type="text"
                        name="name"
                        placeholder="Name"
                        value={state.name}
                        onChange={(e) => setState({ ...state, name: e.target.value })}>
                    </input>
                </div>
                <div className="field">
                    <label>Email id</label>
                    <input type="email"
                        name="email"
                        placeholder="Email id"
                        value={state.email}
                        onChange={(e) => setState({ ...state, email: e.target.value })}>
                    </input>
                </div>
                <div><button className="ui button blue">Add</button></div>
            </form>
        </div>
    );
}
export default AddContact;