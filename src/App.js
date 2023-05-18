import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Dashboard from './Pages/Dashboard/Dashboard';
import Product from './Pages/Dashboard/product/Product';
import 'firebase/firestore';
import Login from './Pages/Dashboard/Auth/Login';

function App() {

  return (
    <div>
      <BrowserRouter basename='/'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/product" component={Product} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
