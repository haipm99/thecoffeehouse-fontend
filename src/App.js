import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//component
import Login from './Page/LoginPage/Login';
//admin
import ManagePost from './Page/ManagePost';
import ManageProduct from './Page/ManageProduct';
import ManageBill from './Page/ManageBill';
import DarshBoard from './Page/DashPage';
//user
import MainPage from './Page/MainPage/MainPage';
import OrderPage from './Page/OrderPage/OrderPage';
import Post from './Page/PostPage/Post';
import Story from './Page/Story/Story';
import Register from './Page/RegisterPage/register';
function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" exact component = {MainPage} />
            <Route path="/login" exact component = {Login} />
            <Route path="/managePost" exact component={ManagePost} />
            <Route path="/manageProducts" exact component={ManageProduct} />
            <Route path="/manageBills" exact component ={ManageBill} />
            <Route path="/darshboard" exact component ={DarshBoard} />
            <Route path="/order" exact component ={OrderPage} />
            <Route path="/post" exact component ={Post} />
            <Route path="/story" exact component ={Story} />
            <Route path="/register" exact component = {Register} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
