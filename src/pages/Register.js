import {Button,Form} from 'react-bootstrap';
import {Fragment, useState, useEffect, useContext, } from 'react'
import {Navigate,useNavigate} from 'react-router-dom'
import UserContext from '../UserContext.js'


export default function Register(){

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isActive, setIsActive] = useState(false);
	// const [user, setUser] = useState(localStorage.getItem("email"))
	const {user, setUser} = useContext(UserContext);
	const navigate = useNavigate();

	/*useEffect(()=>{
		console.log(email)
		console.log(password)
		console.log(confirmPassword)
	}, [email,password,confirmPassword])*/

	useEffect(()=>{
		if (email !== "" && password !== "" && confirmPassword !== "" && password === confirmPassword) {
			setIsActive(true);
		} else {
			setIsActive(false)
		}
	},[email,password,confirmPassword])

	function register (event){
		event.preventDefault();
		alert("Congratulations, Your are now registered on our website!")
		setEmail('');
		setPassword('');
		setConfirmPassword('');
		localStorage.setItem("email", email)
		setUser(localStorage.getItem("email"))
		navigate("/")
	}
	return(
		user ?
		<Navigate to ="/*"/>
		:
		<Fragment>
			<h1 className="text-center mt-5">Register</h1>
			<Form className="mt-5 mx-auto col-md-6" onSubmit = {event => register(event)}>
			     <Form.Group className="mb-3" controlId="formBasicEmail">
			       <Form.Label>Email address</Form.Label>
			       <Form.Control 
			       		type="email" 
			       		placeholder="Enter email"
			       		value = {email}
			       		onChange = {event => setEmail(event.target.value)}
			       		required />
			       <Form.Text className="text-muted">
			         We'll never share your email with anyone else.
			       </Form.Text>
			     </Form.Group>

			     <Form.Group className="mb-3" controlId="formBasicPassword">
			       <Form.Label>Password</Form.Label>
			       <Form.Control 
			       		type="password" 
			       		placeholder="Password"
			       		value = {password}
			       		onChange = {event => setPassword(event.target.value)}
			       		required />
			     </Form.Group>		
			     
			     <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
			       <Form.Label>Confirm Password</Form.Label>
			       <Form.Control 
			       		type="password" 
			       		placeholder="Confirm your Password" 
			       		value = {confirmPassword}
			       		onChange = {event => setConfirmPassword(event.target.value)}
			       		required
			       		/>
			     </Form.Group>

			     {
			     	isActive ?
			     	<Button variant="primary" type="submit">
			     	  Submit
			     	</Button>
			     	:
			     	<Button variant="danger" type="submit" disabled>
			     	  Submit
			     	</Button>
			     }	

			     
			   </Form>
		</Fragment>	   
		)
}