import './App.css';
import { BrowserRouter, Routes } from "react-router-dom"
import './Content/Css/Bootstrap/bootstrap.min.css';
import React  from 'react';

import routes from './routes';

function App() {
  return (
      <BrowserRouter>
    <Routes>
      {routes}
    </Routes>
    </BrowserRouter>
  );
}

export default App;