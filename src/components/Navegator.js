import React, { Component } from 'react';
import { Collapse, Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink } from 'reactstrap';
import logo from '../images/logo.jpeg';
import './Navegator.css';
import { NavLink as RRNavLink } from 'react-router-dom';
import Login from './Login';

class Navegator extends Component{

  
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      getNavLinkClass = (path) => {
        return this.props.location.pathname == path ? 'active' : '';
      }

      loginModalRef = ({toggleLogin}) => {
        this.toggleLogin = toggleLogin;
      }

      onLoginClick = () => {
        this.toggleLogin();
      }

      

      render(){
          return(
            <div>
              <Login ref={this.loginModalRef}/>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand tag={RRNavLink} exact to="/"><img src={logo} className="Navegator-logo"/> Midgard</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                            <NavLink tag={RRNavLink} exact to="/signin">Registrarse</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink tag={RRNavLink} exact to="#" onClick={this.onLoginClick}>Iniciar Sesión</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
          );
      }
}

export default Navegator;