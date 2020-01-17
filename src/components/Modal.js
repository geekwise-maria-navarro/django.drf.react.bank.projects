import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";

export default class CustomModal extends Component {
    constructor(props) {
    super(props);
    this.state = {
        activeItem: this.props.activeItem
    };
    }
    handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
        value = e.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
    };
    render() {
    const { toggle, onSave } = this.props;
    return (
        <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Bank App </ModalHeader>
        <ModalBody>
            <Form>
            <FormGroup>
                <Label for="branch">Branch Info</Label>
                <Input
                type="text"
                name="branch"
                value={this.state.activeItem.branch}
                onChange={this.handleChange}
                placeholder="Branch Name"
                />
            </FormGroup>
            <FormGroup>
                <Label for="address"> address </Label>
                <Input
                type="text"
                name="address"
                value={this.state.activeItem.address}
                onChange={this.handleChange}
                placeholder="address"
                />
            </FormGroup>
            {/* <FormGroup>
                <Label for="product_options"> Product </Label>
                <Input
                type="text"
                name="product_options"
                value={this.state.activeItem.product_options}
                onChange={this.handleChange}
                placeholder="Product Options"
                />
            </FormGroup> */}
            </Form>
        </ModalBody>
        <ModalFooter>
            <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Save
            </Button>
        </ModalFooter>
        </Modal>
    );
    }
}