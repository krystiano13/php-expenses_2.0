import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./views/Home";
import { Instruction } from "./views/Instruction";

const App = () => {
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/instruction' element={<Instruction />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export { App };