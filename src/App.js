
import './App.css';
import {Container} from 'react-bootstrap'
import {Fragment} from 'react';
import AppNavBar from './AppNavBar.js';
import Home from './pages/Home.js'
/*import Banner from './Banner.js'
import Highlights from './Highlights.js'*/

function App() {
  return (
    <Fragment>
    <AppNavBar/>
    <Container>
        <Home/>
    </Container>
    </Fragment>
  );
}

export default App;
