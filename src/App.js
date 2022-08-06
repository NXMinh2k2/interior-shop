import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
