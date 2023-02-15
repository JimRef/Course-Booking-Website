
import './App.css';
import {Container} from 'react-bootstrap'
import {Fragment} from 'react';
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

function App() {
  return (
    <Router>
    <AppNavBar/>
    <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/courses" element = {<Courses/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/logout" element= {<Logout/>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </Router>
  );
}

export default App;
