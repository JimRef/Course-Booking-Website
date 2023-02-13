import Banner from '../Banner.js';
import Highlights from '../Highlights.js';
import CourseCard from '../CourseCard.js'
import {Fragment} from 'react';

export default function Home (){
	return(
		<Fragment>
			<Banner/>
			<Highlights/>
			<CourseCard/>
		</Fragment>
		)
}