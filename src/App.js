import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//component
import Login from './Page/LoginPage/Login';
import ManagePost from './Page/ManagePost';
import ManageProduct from './Page/ManageProduct';
import MainPage from './Page/MainPage/MainPage';
function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/login" exact component = {Login} />
            <Route path="/" exact component = {MainPage} />
            <Route path="/managePost" exact component={ManagePost} />
            <Route path="/manageProducts" exact component={ManageProduct} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
