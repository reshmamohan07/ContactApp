
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Header';
import { Home } from '../pages/Home';
import { AddContactsPage } from '../pages/AddContacts';
import './App.css';
import { ContactDetails } from '../pages/ContactDetails';

const App = () => {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <Header />
        <div className='container-wrapper'>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/add"
              element={<AddContactsPage />}
            />
            <Route
              path="/contact/:chummaid"
              element={<ContactDetails></ContactDetails>}></Route>
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );

}

export default App;
