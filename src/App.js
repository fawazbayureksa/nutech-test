import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Dashboard from './Pages/Dashboard/Dashboard';
import Product from './Pages/Dashboard/product/Product';
import 'firebase/firestore';
import Login from './Pages/Dashboard/Auth/Login';

function App() {

  return (
    <BrowserRouter basename='/nutech-test'>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
