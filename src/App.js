import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'
import Projects from './components/pages/Projects';
import Project from './components/project/Project';

 

function App() {
  return (
    <Router>
      <Navbar></Navbar>

      <Container customClass='minHeight'>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path="/company" element={<Company/>}/>
          <Route path="/CONTACT" element={<Contact/>}/>
          <Route path="/newproject" element={<NewProject/>}/>
          <Route path='/project/:id' element={<Project/>}></Route>
        </Routes>
      </Container>

      <Footer></Footer>
    </Router>
  );
}

export default App;
