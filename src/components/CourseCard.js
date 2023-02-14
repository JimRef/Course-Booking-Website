import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row, Col} from 'react-bootstrap'
import {useState} from 'react';

export default function CourseCard({courseProp}){
	// console.log(course);
	const {name,description,price} = courseProp;
	
	const [enrollees, setEnrolless] = useState(0);
	const [seats, setSeats] = useState(30);

	function enroll() {
		
		if (enrollees === 30 && seats === 0) {
			return alert("No more Available Seats")
		} else {
			setEnrolless(enrollees +1)
			setSeats(seats-1)
		}
	}

	return(
		<Row  className = "mt-5 col-md-12">
			<Col className ="col-md-4 col-10 mx-auto m-md-0 m-1">
				<Card>		      
				      <Card.Body>
				        <Card.Title>{name}</Card.Title>
				        <Card.Subtitle><strong>Description:</strong></Card.Subtitle>
				        <Card.Text>{description}</Card.Text>
				        <Card.Subtitle><strong>Price:</strong></Card.Subtitle>
				        <Card.Text>{price}</Card.Text>
				        <Card.Subtitle><strong>Enrollees:</strong></Card.Subtitle>
				        <Card.Text>{enrollees}</Card.Text>
				        <Card.Subtitle><strong>Available Seats:</strong></Card.Subtitle>
				        <Card.Text>{seats}</Card.Text>
				        <Button variant="primary" onClick = {enroll}>Enroll</Button>
				      </Card.Body>
				</Card>
			</Col>						    
		</Row>    
		)
}