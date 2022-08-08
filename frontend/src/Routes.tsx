import React from "react";
import { Routes, Route } from 'react-router-dom';
import AddMovie from "./pages/Forms/AddMovie";

import Home from './pages/Home';
import Movies from "./pages/Movies";
import Details from "./pages/Movies/Details";
import Characters from "./pages/Movies/Details/CharactersDetails";

export default () => {

    return (
        <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/Movies" element = {<Movies />} />
            <Route path="/details/:id" element = {<Details />} />
            <Route path="/characters" element = {<Characters />} />
<<<<<<< HEAD
            <Route path="/addcollection/:id" element = {<AddMovie />} />
=======
            <Route path="/details/:id/addcollection" element = {<AddMovie />} />
>>>>>>> 152c3711577408a6a644b3d9125c2b93c643207b
        </Routes>
    );
}