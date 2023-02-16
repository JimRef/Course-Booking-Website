
import './App.css';
// import {Container} from 'react-bootstrap'
import {useState, useEffect} from 'react';
import AppNavBar from './components/AppNavBar.js';
import Home from './pages/Home.js'
import Courses from './pages/Courses.js'
import Register from './pages/Register.js'
import Login from './pages/Login.js'
import Logout from './pages/Logout.js'
import PageNotFound from './pages/404Page.js'
/*import Banner from './Banner.js'
import Highlights from './Highlights.js'*/
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {UserProvider} from './UserContext.js'
import CourseView from './components/CourseView.js'

function App() {
  const [user, setUser] = useState(null)

  useEffect(()=>{
    console.log(user)
  },[user])
  
  const unSetUser = ()=> {
    localStorage.clear();
    
  }

  useEffect(()=>{

    fetch(`${process.env.REACT_APP_API_URL}/user/details`, {
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(result => result.json())
    .then(data =>{
      console.log(data)
      if (localStorage.getItem('token')!== null){
          setUser({
          id: data._id,
          isAdmin: data.isAdmin
        })
      } else {
        setUser(null)
      }
      
    })

  },[])

  return (
    <UserProvider value ={{user,setUser,unSetUser}}>
      <Router>
        <AppNavBar/>
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/courses" element = {<Courses/>}/>
            <Route path="/register" element = {<Register/>}/>
            <Route path="/login" element = {<Login/>}/>
            <Route path="/logout" element= {<Logout/>}/>
            <Route path="*" element={<PageNotFound/>}/>
            <Route path="/course/:courseId" element={<CourseView/>}/>

          </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
