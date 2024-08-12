import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Navbar from 'react-bootstrap/Navbar';

class Nav extends Component   {
  state={clicked: false};
  handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
  return (
    <div>
     <Navbar className=" navbar ">
      
        <NavLink to="/#Home"><img className='logo' src='\images\Untitled design (3).png'/></NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end taps">
        <ul id='right-nav' className={this.state.clicked?
         "#right-nav active" : "#right-nav " }>
      <li>  <HashLink className='tap' smooth to="/">Home</HashLink></li> 
      <li>  <HashLink className='tap' smooth to="latest">Latest Builds</HashLink></li> 
      <li>  <HashLink className='tap' smooth to="contact" >Contact Us</HashLink></li>
      <li>  <HashLink className='tap' smooth to="process" >Process</HashLink></li>
      <li>  <HashLink className='tap' smooth to="services">Services</HashLink> </li>
      <li>  <HashLink className='tap' smooth to="projects" >Projects</HashLink></li>
        </ul>
        <div className='mobile'>
          <i id='bar' onClick={this.handleClick} 
          className={this.state.clicked ?
          "fas fa-times" : "fas fa-bars"}></i>

        </div>
        </Navbar.Collapse>
      
        </Navbar>
  
       
      </div>

  )
}
}
export default Nav