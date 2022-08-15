import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './Components/Layout/layout';

//Views
import Login from './Pages/Login/login';
import UserProfile from './Pages/userProfile/userProfile';
//import Promos from './Pages/Promociones/ListaPromociones';

export default [
  <Route path="/" element={<Login/>}/>,
  <Route path="/Login" element={<Login/>}/>,
  <Route path="/Inicio" element={<Layout children={<UserProfile/>}/>}/>
];