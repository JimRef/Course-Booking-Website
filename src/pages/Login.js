import {Button,Form} from 'react-bootstrap';
import {Fragment} from 'react';
import {useState,useEffect} from 'react'
import {Navigate} from 'react-router-dom';

export default function Login (){

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isActive, setIsActive] = useState(false);
	const [user, setUser] = useState(localStorage.getItem("email"))

	useEffect(()=>{
		if (email !== "" && password !== "") {
			setIsActive(true);
		} else {
			setIsActive(false)
		}
	},[email,password])

	function login (event){
		event.preventDefault();

		localStorage.setItem("email", email)
		alert("Your are now login!")
		setEmail('');
		setPassword('');
		
	}



	return(
		user ?
		<Navigate to ="/"/>
		:
		<Fragment>
			<h1 className="text-center mt-5">Login</h1>
			<Form className="mt-5 mx-auto col-md-6" onSubmit = {event => login(event)}>
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
			     			     
			     {
			     	isActive ?
			     	<Button variant="success" type="submit">
			     	  Submit
			     	</Button>
			     	:
			     	<Button variant="secondary" type="submit" disabled>
			     	  Submit
			     	</Button>
			     }	

			     
			   </Form>
		</Fragment>
		)
}