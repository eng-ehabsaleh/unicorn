import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
class SelectedBeast extends React.Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.image_url}</Modal.Body>
          <Modal.Body>{this.props.describtion}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" >
              Close
            </Button>
            <Button variant="primary" >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;
