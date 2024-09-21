import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Allproducts from '../pages/Allproducts';

const MyRoutes = () => {

    return(
        
        <Routes>
            <Route path="/" element={<Home/>} />
            
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/allproducts" element={<Allproducts/>}  />
        </Routes>

    );
};
export default MyRoutes;