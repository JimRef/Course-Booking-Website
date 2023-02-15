import {Navigate} from 'react-router-dom';
import {useContext} from 'react'
import UserContext from '../UserContext.js'
export default function Logout(){
	// localStorage.clear();
	const {unSetUser, setUser} = useContext(UserContext)

	unSetUser();
	setUser(localStorage.getItem("email"));
	
	return(
			<Navigate to = "/login"/>
		)
}