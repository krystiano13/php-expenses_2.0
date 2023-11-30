import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./views/Home";
import { Instruction } from "./views/Instruction";
import { Table } from "./views/Table";

export type income = { income: number, expenses: number, net: number } | undefined;

const App = () => {
    const [data,setData] = useState<string[][]>([[]]);
    const [income, setIncome] = useState<income>();
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home setIncome={(el:income) => setIncome(el)} setData={(arr:string[][]) => setData(arr)} />} />
                    <Route path='/instruction' element={<Instruction />} />
                    <Route path='/table' element={<Table income={income} data={data} />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export { App };