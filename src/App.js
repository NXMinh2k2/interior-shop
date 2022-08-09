import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import LivingRoomPage from './pages/LivingRoomPage/LivingRoomPage';
import BedRoomPage from './pages/BedRoomPage/BedRoomPage';
import KitchenPage from './pages/KitchenPage/Kitchenpage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import NewsPage from './pages/NewsPage/NewsPage';
import ProductPage from './pages/ProductPage/ProductPage';

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
          <Route path='/livingroom' element={<LivingRoomPage />} />
          <Route path='/bedroom' element={<BedRoomPage />}/>
          <Route path='/kitchen' element={<KitchenPage />}/>
          <Route path='/project' element={<ProjectPage />}/>
          <Route path='/news' element={<NewsPage />}/>
          <Route path='/productpage' element={<ProductPage />}/>
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
