import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home.js';
import NotFound from './components/pages/NotFound.js';
import ConceptPage from "./components/pages/Concept.js";
import '../css/main.scss';

const App = () => (
    <div>
	<BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="poc" element={<ConceptPage/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
	</BrowserRouter>
    </div>
)

export default App;
