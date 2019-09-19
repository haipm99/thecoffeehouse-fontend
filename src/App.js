import React from 'react';
import './App.css';
import './css/animate.css';
import './css/bootstrap.min.css';
import './css/modal.css';
import './css/style4.css';
import './css/main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//component
import ManagePost from './Page/ManagePost';
import ManageProduct from './Page/ManageProduct';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/managePost" exact component={ManagePost} />
            <Route path="/manageProducts" exact component={ManageProduct} />

          </Switch>
        </Router>
    </div>
  );
}

export default App;
