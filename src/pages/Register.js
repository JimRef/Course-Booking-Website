import {Button,Form} from 'react-bootstrap';
import {Fragment, useState, useEffect, useContext, } from 'react'
import {Navigate,useNavigate} from 'react-router-dom'
import UserContext from '../UserContext.js'
import Swal from 'sweetalert2';


export default function Register(){

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [mobileNo, setMobileNo] = useState("");	
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
		if (firstName !== "" && lastName !== "" && email !== "" && password !== "" && mobileNo !== "" && confirmPassword !== "" && password === confirmPassword) {
			setIsActive(true);
		} else {
			setIsActive(false)
		}
	},[email,password,confirmPassword,firstName,lastName,mobileNo])

	function register (event){
		event.preventDefault();

		fetch(`${process.env.REACT_APP_API_URL}/user/register`,{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password,
				mobileNo: mobileNo
			})
		}).then(result => result.json())
		.then(data =>{
			if (data) {
				Swal.fire({
					title: "Registration successfull",
					icon: 'success',
					text: "You may now Login to our website"
				})

				navigate("/login")
			} else {
				Swal.fire({
					title: "Registration unsuccessfull",
					icon: 'error',
					text: "Please try again"
				})
			}
		})


		/*alert("Congratulations, Your are now registered on our website!")
		localStorage.setItem("email", email)
		setUser(localStorage.getItem("email"))
		setEmail('');
		setPassword('');
		setConfirmPassword('');
		
		navigate("/")*/
	}
	return(
		user ?
		<Navigate to ="/*"/>
		:
		<Fragment>
			<h1 className="text-center mt-5">Register</h1>
			<Form className="mt-5 mx-auto col-md-6" onSubmit = {event => register(event)}>
			     <Form.Group className="mb-3" controlId="formFirstName">
			       <Form.Label>First Name</Form.Label>
			       <Form.Control 
			       		type="String" 
			       		placeholder="First Name"
			       		value = {firstName}
			       		onChange = {event => setFirstName(event.target.value)}
			       		required />
			     </Form.Group>

			     <Form.Group className="mb-3" controlId="formLastName">
			       <Form.Label>Last Name</Form.Label>
			       <Form.Control 
			       		type="String" 
			       		placeholder="Last Name"
			       		value = {lastName}
			       		onChange = {event => setLastName(event.target.value)}
			       		required />			       
			     </Form.Group>

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

			     <Form.Group className="mb-3" controlId="formBasicMobileNo">
			       <Form.Label>Mobile No</Form.Label>
			       <Form.Control 
			       		type="String" 
			       		placeholder="Mobile No"
			       		value = {mobileNo}
			       		onChange = {event => setMobileNo(event.target.value)}
			       		required />			       
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