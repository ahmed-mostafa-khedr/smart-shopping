import './css/App.css';
import NavbarLoginCompo from './Components/utilities/NavbarLoginCompo';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import TypesPage from './Pages/TypesPage';
import PopularPages from './Pages/PopularPages';
import ShoppingPage from './Pages/ShoppingPage';
import LoginPage from './Pages/AuthPages/LoginPage';
import RegisterPage from './Pages/AuthPages/RegisterPage';
import FooterCompo from './Components/utilities/FooterCompo';

function App() {
  return (

    <div>
      {
        localStorage.getItem('username') ?
        <NavbarLoginCompo loginState={` مرحباً بك  ${localStorage.getItem("username").trim().toUpperCase()}`}/>
        :  <NavbarLoginCompo loginState= "تسجيل الدخول" />
        
      }
      

      <BrowserRouter>
      <Routes>        
        <Route index element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/categories" element={<TypesPage />} />
        <Route path="/popular" element={<PopularPages />} />
        <Route path="/products" element={<ShoppingPage />} />

      </Routes>
      </BrowserRouter>

      <FooterCompo/>
    </div>
   
  );
}

export default App;