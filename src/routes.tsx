import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Landing from './pages/Landing';
import MyWork from './pages/MyWork';

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/about-me' element={<AboutMe/>}/>
                <Route path='/my-work' element={<MyWork/>}/>
                <Route path='/contact-me' element={<ContactMe/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;