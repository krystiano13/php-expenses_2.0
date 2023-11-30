import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./views/Home";
import { Instruction } from "./views/Instruction";
import { Table } from "./views/Table";

const App = () => {
    const [data,setData] = useState<string[]>([]);
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home setData={(arr:string[]) => setData(arr)} />} />
                    <Route path='/instruction' element={<Instruction />} />
                    <Route path='/table' element={<Table />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export { App };