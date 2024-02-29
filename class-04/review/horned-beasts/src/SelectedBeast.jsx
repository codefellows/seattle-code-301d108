import { Modal } from 'react-bootstrap';

function SelectedBeast(props) {
    return (
        <Modal show={props.showBool} onHide={props.onHide}>
            <Modal.Header closeButton>
            <Modal.Title> {props.selectBeast?.title} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img ></img>
            </Modal.Body>
        </Modal>
    )
}

export default SelectedBeast;