import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import './styles/App.css';
import Home from './pages/Home';
import Details from './pages/Details';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/detail/:id' element={<Details/>} />
      </Routes>
    </Router>
  )
}

export default App
