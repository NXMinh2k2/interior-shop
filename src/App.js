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
import ProductPage2 from './pages/ProductPage/ProductPage2';
import ProductPage3 from './pages/ProductPage/ProductPage3';
import ProductPage4 from './pages/ProductPage/ProductPage4';
import SofaPage from './pages/LivingRoomPage/SofaPage';
import ShelfPage from './pages/LivingRoomPage/ShelfPage';
import DeskPage from './pages/LivingRoomPage/DeskPage';
import BedPage from './pages/BedRoomPage/BedPage';
import CabinetPage from './pages/BedRoomPage/Cabinet';
import DressingTablePage from './pages/BedRoomPage/DressingTable';
import DinningTablePage from './pages/KitchenPage/DinningTable';
import DinningChairPage from './pages/KitchenPage/DinnigChair';
import KitchenCabinetPage from './pages/KitchenPage/KitchenCabinet';
import DetailProductPage from './pages/DetailProductPage/DetailProductPage';
import CartProductPage from './pages/CartProductPage/CartProductPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

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
          <Route path='/sofa' element={<SofaPage />}/>
          <Route path='/shelf' element={<ShelfPage />}/>
          <Route path='/desk' element={<DeskPage />}/>
          <Route path='/bedroom' element={<BedRoomPage />} />
          <Route path='/bed' element={<BedPage />}/>
          <Route path='/cabinet' element={<CabinetPage />}/>
          <Route path='/dressingtable' element={<DressingTablePage />}/>
          <Route path='/kitchen' element={<KitchenPage />}/>
          <Route path='/dinningtable' element={<DinningTablePage />}/>
          <Route path='/dinningchair' element={<DinningChairPage />}/>
          <Route path='/kitchencabinet' element={<KitchenCabinetPage />}/>
          <Route path='/project' element={<ProjectPage />}/>
          <Route path='/news' element={<NewsPage />}/>
          <Route path='/productpage' element={<ProductPage />}/>
          <Route path='/productpage2' element={<ProductPage2 />}/>
          <Route path='/productpage3' element={<ProductPage3 />}/>
          <Route path='/productpage4' element={<ProductPage4 />}/>
          <Route path='detailproductpage/:id' element={<DetailProductPage />}/>
          <Route path='cart' element={<CartProductPage />}/>
          <Route path='checkout' element={<CheckoutPage />}/>
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
