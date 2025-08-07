import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Add from './pages/Add/Add';
import Orders from './pages/Orders/Orders';
import List from './pages/List/List';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <Router>
      <div>
        <ToastContainer/>
        <Navbar />
        <hr />
        <div className='app-content' style={{ display: 'flex' }}>
          <Sidebar />
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/path" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
