import React, { useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Authentication from "./components/Authentication";
import Users from "./components/admincomponents/Users";
import Products from "./components/admincomponents/Products";
import Categories from "./components/admincomponents/Categories";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Shop from "./components/Shop";
import ClientOrder from "./components/ClientOrder";
import {useDispatch} from 'react-redux'
import { getcategories } from "./features/categories/categoriesSlice";
import { getproducts } from "./features/products/productsSlice";
import Cart from "./components/Cart";
import OrderSucces from "./components/OrderSucces";
import Orders from "./components/admincomponents/Orders";

function App() {

  const dispatch = useDispatch()

   useEffect(() => {
        dispatch(getcategories())
        dispatch(getproducts())
    }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          
          <PrivateRoute path="/users" roles={["admin"]} component={Users} />
          <PrivateRoute path="/clientorders" roles={["client"]} component={ClientOrder} />
          <PrivateRoute path="/products" roles={["admin"]} component={Products} />
          <PrivateRoute path="/orders" roles={["admin"]} component={Orders} />
          <PrivateRoute path="/ordersuccess" roles={["client"]} component={OrderSucces} />
          <PrivateRoute path="/categories" roles={["admin"]} component={Categories} />
          <PrivateRoute path="/profile" roles={["admin","client"]} component={Profile} />
          <PublicRoute restricted={false} path='/home' component={Home} ></PublicRoute>
          <PublicRoute restricted={true} path='/login' component={Authentication} ></PublicRoute>
          <PublicRoute restricted={false} path='/shop' component={Shop} ></PublicRoute>
          <PublicRoute restricted={false} path='/cart' component={Cart} ></PublicRoute>
          <PublicRoute restricted={false} path='/' component={Home} ></PublicRoute>

        </Switch>
      </Router>
    </div>
  );
}

export default App;