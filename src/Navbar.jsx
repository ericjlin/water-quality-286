import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
// import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileToggle: false,
      role: localStorage.getItem("user") ? localStorage.getItem("user") : "",
    };
  }

  profileToggle = () => {
    this.setState({
      profileToggle: !this.state.profileToggle,
    });
  };

  handleLogout = (e) => {
    localStorage.clear();
    this.props.history.push("/login");
  };

  //prop that checks role

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <div className="navbar-brand" to="/">
            Welcome!
          </div>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <div className="nav-link" to="/">
                Water Hardness Monitoring System
              </div>
            </NavItem>
          </Nav>
          <Dropdown
            className="pr-2"
            isOpen={this.state.profileToggle}
            toggle={this.profileToggle}
          >
            <DropdownToggle color="info" caret>
              Profile
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Profile</DropdownItem>
              <div className="dropdown-item" to="/profile">
                Settings
              </div>
              <DropdownItem divider />
              <DropdownItem onClick={this.handleLogout}>Logout</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;