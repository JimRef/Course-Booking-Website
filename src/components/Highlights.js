// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row, Col} from 'react-bootstrap';

export default function Highlights(){
	return(
		
			<Row className="mt-5 " >
				<Col className ="col-md-4 col-10 mx-auto m-md-0 m-1">
					<Card className="cardHighlight">
					      <Card.Body>
					        <Card.Title>Learn From Home</Card.Title>
					        <Card.Text>
					          Some quick example text to build on the card title and make up the
					          bulk of the card's content.
					        </Card.Text>		      
					      </Card.Body>
					</Card>
				</Col>
				{/*Second Card*/}
				<Col className ="col-md-4 col-10 mx-auto m-md-0 m-1">
					<Card className="cardHighlight">
					      <Card.Body>
					        <Card.Title>Study Now, Pay Later</Card.Title>
					        <Card.Text>
					          Some quick example text to build on the card title and make up the
					          bulk of the card's content.
					        </Card.Text>		      
					      </Card.Body>
					</Card>
				</Col>	
				{/*Third Card*/}
				<Col className ="col-md-4 col-10 mx-auto m-md-0 m-1">
					<Card className="cardHighlight">
					      <Card.Body>
					        <Card.Title>Be Part of our Community</Card.Title>
					        <Card.Text>
					          Some quick example text to build on the card title and make up the
					          bulk of the card's content.
					        </Card.Text>		      
					      </Card.Body>
					</Card>
				</Col>	
			</Row>
		
		)
}