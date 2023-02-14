import coursesData from '../database/courses.js';
import CourseCard from '../components/CourseCard.js';
import {Fragment} from 'react';




export default function Courses(){
	// console.log(coursesData)
	const courses = coursesData.map(course =>{
		return(
				<CourseCard key={course.id} courseProp={course}/>
			)
	})

	return(	
		<Fragment>	
			{courses}
		</Fragment>
		)
		
}