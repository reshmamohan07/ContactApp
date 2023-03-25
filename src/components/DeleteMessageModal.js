
import React from "react";
import { Button, Icon, Modal } from 'semantic-ui-react'

const DeleteModal = ({open, closeCallBack}) => {

    const onClose = () => {
    }

    return (

        <>
            <Modal
                size={'mini'}
                open={open}
                onClose={onClose}
            >
                <Modal.Header>Delete Your Account</Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to delete your account</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={() => closeCallBack('NO')}>
                        No
                    </Button>
                    <Button positive onClick={() => closeCallBack('YES')}>
                        Yes
                    </Button>
                </Modal.Actions>
            </Modal>


            {/* <div className="ui active tiny modal">
    <div className="header">
        Delete Your Account
    </div>
    <div className="content">
        <p>Are you sure,you want to delete your account</p>
    </div>
    <div className="actions">
        <div className="ui red tiny button">No</div>
        <div className="ui positive right labeled icon button">Yes</div>
    </div>
</div> */}

        </>
    )

}

export default DeleteModal;