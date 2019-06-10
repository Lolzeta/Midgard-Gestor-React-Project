import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
      const closeBtn = <button className="close" onClick={this.toggleLogin}>&times;</button>;

      return (
      <div>
        <Modal isOpen={this.state.modal} toggleLogin={this.toggleLogin} className={this.props.className}>
          <ModalHeader toggleLogin={this.toggleLogin} close={closeBtn}>Inicio de Sesión</ModalHeader>
          <ModalBody>
            <Form>
                <FormGroup>
                    <Label for="user">Nombre de usuario</Label>
                    <Input type="text" name="user" id="user" placeholder="Introduce tu nombre de usuario"/>
                </FormGroup>
                
                <FormGroup>
                    <Label for="pass">Contraseña</Label>
                    <Input type="password" name="pass" id="pass" placeholder="Introduce tu contraseña"/>
                </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleLogin}>Ingresar</Button>{' '}
            <Button color="danger" onClick={this.toggleLogin}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
