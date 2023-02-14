
import './App.css';
import {Container} from 'react-bootstrap'
import {Fragment} from 'react';
import AppNavBar from './components/AppNavBar.js';
import Home from './pages/Home.js'
import Courses from './pages/Courses.js'
import Register from './pages/Register.js'
import Login from './pages/Login.js'
/*import Banner from './Banner.js'
import Highlights from './Highlights.js'*/

function App() {
  return (
    <Fragment>
    <AppNavBar/>
    <Container>
        {/*<Home/>
        <Courses/>*/}
      {/*<Register/>*/}
      <Login/>
    </Container>
    </Fragment>
  );
}

export default App;
