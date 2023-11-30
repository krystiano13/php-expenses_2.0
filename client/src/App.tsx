import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./views/Home";
import { Instruction } from "./views/Instruction";

const App = () => {
    const [data,setData] = useState<string[]>([]);
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home setData={(arr:string[]) => setData(arr)} />} />
                    <Route path='/instruction' element={<Instruction />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export { App };