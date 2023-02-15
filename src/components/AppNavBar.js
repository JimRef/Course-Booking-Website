// import BOOTSTRAP classes
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, NavLink} from 'react-router-dom'
import {useState} from 'react';
import {Fragment} from 'react';


export default function AppNavBar(){
	console.log(localStorage.getItem("email"))

	const [user, setUser] = useState(localStorage.getItem("email"))


	return(
			<Navbar bg="light" expand="lg">
			      <Container>
			        <Navbar.Brand as = {Link} to = "/">Zuitt</Navbar.Brand>
			        <Navbar.Toggle aria-controls="basic-navbar-nav" />
			        <Navbar.Collapse id="basic-navbar-nav">
			          <Nav className="ms-auto">
			            <Nav.Link as = {NavLink} to = "/">Home</Nav.Link>
			            <Nav.Link as = {NavLink} to = "/courses">Courses</Nav.Link>   
			            
			            {
			            	user ?
			            	<Nav.Link as = {NavLink} to = "/logout">Logout</Nav.Link>
			            	:
			            	<Fragment>
			            		<Nav.Link as = {NavLink} to = "/register">Register</Nav.Link>   
			            		<Nav.Link as = {NavLink} to = "/login">Login</Nav.Link>  
			           		</Fragment>
			            }


			             
			          </Nav>
			        </Navbar.Collapse>
			      </Container>
			    </Navbar>
		)
}