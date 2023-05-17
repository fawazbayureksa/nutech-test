import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Dashboard from './Pages/Dashboard/Dashboard';
import Product from './Pages/Dashboard/product/Product';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Login from './Pages/Dashboard/Auth/Login';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
      </Routes>
    </Router>
  );
}

export default App;
