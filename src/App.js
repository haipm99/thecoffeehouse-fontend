import React from 'react';
import './App.css';
import './css/animate.css';
import './css/bootstrap.min.css';
import './css/modal.css';
import './css/style4.css';
import './css/main.css';
//component
import Sidebar from './component/Sidebar';
import Content from './component/AdminArea';
function App() {
  return (
    <div className="App">
      <div class="row">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
