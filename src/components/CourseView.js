import {useState, useEffect} from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import {useParams, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

export default function CourseView(){
	
	const [name,setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const {courseId} = useParams();
	const navigate = useNavigate();
	
	useEffect(()=>{
		console.log(courseId)
		fetch(`${process.env.REACT_APP_API_URL}/course/${courseId}`)
		.then(result => result.json())
		.then(data =>{
			console.log(data)
			setName(data.name);
			setDescription(data.description);
			setPrice(data.price);
		})
	}, [courseId])

	const enroll = (id) => {
		fetch(`${process.env.REACT_APP_API_URL}/user/enroll/${id}`,{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}

		})
		.then(result => result.json())
		.then(data => {
			console.log(data)

			if (data === false) {
				Swal.fire({
					title: "Enrollment unseccessfull",
					icon: 'error',
					text: "Please try again!"
				})
			} else {
				Swal.fire({
					title: "Successfully enrolled!",
					icon: 'success',
					text: "Please wait for final schedule of the course"
				})

				navigate('/courses');
			}
		})
	}	

	return(
			<Container className="mt-5">
			   	<Row>
			        <Col lg={{ span: 6, offset: 3 }}>
			            <Card>
			            <Card.Body className="text-center">
			            	<Card.Title>{name}</Card.Title>
			            	<Card.Subtitle>Description:</Card.Subtitle>
			            	<Card.Text>{description}</Card.Text>
			            	<Card.Subtitle>Price:</Card.Subtitle>
			           	 	<Card.Text>PhP {price}</Card.Text>
			            	<Card.Subtitle>Class Schedule</Card.Subtitle>
			            	<Card.Text>8 am - 5 pm</Card.Text>
			            	<Button variant="primary" onClick = {()=> enroll(courseId)}>Enroll</Button>
			            </Card.Body>        
			            </Card>
			       	</Col>
			    </Row>
			</Container>
		)
}