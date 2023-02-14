// import BOOTSTRAP classess
import {Row, Col, Button} from 'react-bootstrap';

export default function Banner(){

	return(
		
			<Row className = "mt-5">
				<Col className="text-center">
					<h1>Zuitt Coding Bootcamp</h1>
					<p className = "pt-1">Opportunities for everyone,everywhere</p>
					<Button className ="pt-1">Enroll Now!</Button>
				</Col>
			</Row>
		
		)
}