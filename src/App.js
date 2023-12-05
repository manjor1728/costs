import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

function App() {
  return (
    <Router>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/company'>Empresa</Link>
        <Link to='/contact'>Contacto</Link>
        <Link to='/newproject'>Novo Projecto</Link>
      </ul>
      <Routes>
        <Route exact path='/'><Home></Home></Route>
        <Route path='/company'><Company></Company></Route>
        <Route path='/contact'><Contact></Contact></Route>
        <Route path='/newproject'><NewProject></NewProject></Route>
      </Routes>
      <p>Rodapé</p>
    </Router>
  );
}

export default App;
