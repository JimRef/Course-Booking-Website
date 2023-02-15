import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row, Col} from 'react-bootstrap'
import {useState, useEffect} from 'react';

export default function CourseCard({courseProp}){
	// console.log(course);
	const {name,description,price} = courseProp;
	
	const [enrollees, setEnrolless] = useState(0);
	const [seats, setSeats] = useState(30);
	const [isDisabled, setIsDisabled] = useState(false)



	function enroll() {
		
		if (enrollees === 29 && seats === 1) {
			setEnrolless(enrollees +1)
			setSeats(seats-1)
			return alert("Congratulations for making it to the cut")
		} else {
			setEnrolless(enrollees +1)
			setSeats(seats-1)
		}
	}
	
	useEffect(() => {
		if (seats === 0) {
			setIsDisabled(true)
		}
	}, [seats])

	return(
		<Row  className = "mt-5 col-md-12 mx-auto">
			<Col className ="col-md-12 col-10 mx-auto m-md-0 m-1">
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
				        <Button variant="primary" onClick = {enroll} disabled={isDisabled}>Enroll</Button>
				      </Card.Body>
				</Card>
			</Col>						    
		</Row>    
		)
}