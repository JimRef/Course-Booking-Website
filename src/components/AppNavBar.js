// import BOOTSTRAP classes
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function AppNavBar(){

	return(
			<Navbar bg="light" expand="lg">
			      <Container>
			        <Navbar.Brand href="#home">Zuitt</Navbar.Brand>
			        <Navbar.Toggle aria-controls="basic-navbar-nav" />
			        <Navbar.Collapse id="basic-navbar-nav">
			          <Nav className="me-auto">
			            <Nav.Link href="#home">Home</Nav.Link>
			            <Nav.Link href="#link">Courses</Nav.Link>   
			          </Nav>
			        </Navbar.Collapse>
			      </Container>
			    </Navbar>
		)
}