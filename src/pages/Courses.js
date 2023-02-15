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
			<h1 className="text-center mt-3">Courses</h1>	
			{courses}
		</Fragment>
		)
		
}