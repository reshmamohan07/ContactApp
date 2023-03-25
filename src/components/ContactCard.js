import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import user from '../images/user.jpg';
import DeleteModal from "./DeleteMessageModal";
import { fetchAsynDeleteContacts } from "../store/reducers/contactReducer";


const ContactCard = (props) => {
	const { id, name, email } = props.contact;
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const dispatch = useDispatch();

	const closeCallBack = (val) => {
		setDeleteModalOpen(false)

		// condition
		if (val === 'YES') {
			dispatch(fetchAsynDeleteContacts(id));

		}
	}
	return (
		<>
			<div className="item">
				<img className="ui avatar image" src={user} alt="user" />
				<div className="content">
					<Link to={'/contact/' + id} state={{ contactId: id }} >
						<div className="header">{name}</div>
						<div>{email}</div>
					</Link>
					<i style={{ color: "red", marginTop: '7px' }}
						className="trash alternate outline icon delete-icon"
						onClick={() => setDeleteModalOpen(true)}></i>
				</div>
			</div>

			<DeleteModal open={deleteModalOpen} closeCallBack={closeCallBack} />
		</>
	)
}
export default ContactCard;