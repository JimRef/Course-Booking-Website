import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CourseCard(){
	return(
		<Card className = "mt-5 col-xl-11 ">		      
		      <Card.Body>
		        <Card.Title>React JS</Card.Title>
		        <Card.Text>
		          <h6>Description</h6>
		          <p>Learn the Basics of React JS</p>
		          <br/>
		          <h6>Price</h6>
		          <p>PHP 5000</p>
		        </Card.Text>
		        <Button variant="primary">Enroll</Button>
		      </Card.Body>
		    </Card>
		)
}