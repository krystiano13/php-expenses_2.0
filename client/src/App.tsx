import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./views/Home";

const App = () => {
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export { App };