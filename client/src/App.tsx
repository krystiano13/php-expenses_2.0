import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./views/Home";
import { Loader } from "./components/Loader/Loader";

const Instruction = lazy(() => import('./views/Instruction'));
const Table = lazy(() => import('./views/Table'));

export type income = { income: number, expenses: number, net: number } | undefined;

const App = () => {
    const [data,setData] = useState<string[][]>([[]]);
    const [income, setIncome] = useState<income>();
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home setIncome={(el:income) => setIncome(el)} setData={(arr:string[][]) => setData(arr)} />} />
                    <Route path='/instruction' element={<Suspense fallback={<Loader />}><Instruction /></Suspense>} />
                        <Route path='/table' element={<Suspense fallback={<Loader />}><Table income={income} data={data} /></Suspense>} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export { App };