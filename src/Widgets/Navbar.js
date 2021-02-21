import React, { Component } from 'react';
import {NavLink,Link} from 'react-router-dom';
import{MenuItem} from "./MenuItem"
import './Navbar.css'
import {Button} from "./Button"

class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className = "navbar-logo">FITHACK <i className="fas fa-heartbeat"></i></h1>
                <div className = "menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItem.map((item, index) => {
                        return(
                            <li key={index}>
                                <NavLink className={`${item.cName} ${item.active}`} exact to={item.url}>
                                    {item.title}
                                </NavLink>
                            </li>
                        )
                    })}          
                </ul>
                <Link to="/signup">
                <Button >SignUp</Button>
                </Link>
            </nav>
        )
    }
}

export default Navbar

