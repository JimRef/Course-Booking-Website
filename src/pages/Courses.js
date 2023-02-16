
import CourseCard from '../components/CourseCard.js';
import {Fragment, useEffect, useState} from 'react';




export default function Courses(){
	// console.log(coursesData)


	// const courses = coursesData.map(course =>{
	// 	return(
	// 			<CourseCard key={course.id} courseProp={course}/>
	// 		)
	// })

	const [courses, setCourses] = useState([]);

	useEffect(()=>{
		fetch(`${process.env.REACT_APP_API_URL}/course/allActive`,)
		.then(result => result.json())
		.then(data => {
			console.log(data)
			setCourses(data.map(course =>{
		return(
	 			<CourseCard key={course._id} courseProp={course}/>
	 		)
		 }))
		})
	},[])

	return(	
		<Fragment>
			<h1 className="text-center mt-3">Courses</h1>	
			{courses}
		</Fragment>
		)
		
}