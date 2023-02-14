
import './App.css';
import {Container} from 'react-bootstrap'
import {Fragment} from 'react';
import AppNavBar from './components/AppNavBar.js';
import Home from './pages/Home.js'
import Courses from './pages/Courses.js'
/*import Banner from './Banner.js'
import Highlights from './Highlights.js'*/

function App() {
  return (
    <Fragment>
    <AppNavBar/>
    <Container>
        <Home/>
        <Courses/>
    </Container>
    </Fragment>
  );
}

export default App;
