import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Film from './pages/Film';
import ActionFig from './pages/ActionFig';

export default () => {

    return (
        <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/ActionFig" element = {<ActionFig />} />
            <Route path="/Film" element = {<Film />} />
        </Routes>
    );
}