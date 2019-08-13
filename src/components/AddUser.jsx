import React from 'react'
import { Modal, Button, Form } from 'bootstrap'

function ModalUserRegistraion(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Enter your NickName (づ ◕‿◕ )づ
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control placeholder="NickName" />
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} type="submit"></Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ModalUserRegistraion