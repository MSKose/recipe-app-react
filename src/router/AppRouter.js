import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from '../components/globalStyles/Global.styles';
import Navbar from '../components/navbar/Navbar';
import About from '../pages/about/About';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import PrivateRouter from './PrivateRouter';
import Detail from '../pages/details/Details';
import Register from '../pages/register/Register';


const AppRouter = () => {
  return (
  <BrowserRouter>
    <GlobalStyles />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>

        <Route path="detail" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>
      </Routes>
  </BrowserRouter>
  )
}

export default AppRouter