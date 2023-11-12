import './App.css';
import { BrowserRouter as Router, Route, Routes, withRouter} from 'react-router-dom';
import InfoJovenes from './Components/InfoJovenes';
import InfoAdultos from './Components/InfoAdultos';
import Inicio from './Components/Inicio';
import Navigationbar from './Components/Navigationbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigationbar />
        <Routes>
          <Route exact path='/' element={<Inicio/>} />
          <Route path='/InfoJovenes' element={<InfoJovenes/>} />
          <Route path='/InfoAdultos' element={<InfoAdultos/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;