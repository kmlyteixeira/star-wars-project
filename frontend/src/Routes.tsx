import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ActionFig from './pages/ActionFig';
import Movies from "./pages/Movies";
import Details from "./pages/Movies/Details";

export default () => {

    return (
        <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/ActionFig" element = {<ActionFig />} />
            <Route path="/Movies" element = {<Movies />} />
            <Route path="/details/:id" element = {<Details />} />
        </Routes>
    );
}