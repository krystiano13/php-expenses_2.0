import React, { useRef } from 'react';
import { NavLink } from "react-router-dom";
import {useNavigate} from "react-router";
import '../styles/Home/Home.min.css';

import type { income } from "../App";

interface Props {
    setData: (arr:string[][]) => void,
    setIncome: (el:income) => void
}

const Home: React.FC<Props> = ({ setData, setIncome }) => {

    const navigate = useNavigate();
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(form.current as HTMLFormElement);
        formData.append('test', 'test');
        await fetch('http://localhost:8000/index.php',
            {
                method : "POST",
                body : formData,
                mode : 'cors'
            })
            .then(res => res.json())
            .then(data => {
                if(data.result) {
                    const result:string[][] = data.result;
                    result.shift();
                    setData(data.result);
                    setIncome(data.income);
                    navigate('/table');
                }
                else {
                    alert('Uploading failed');
                }
            })
    }

    return (
        <section className="HomeWrapper">
            <h1 className="HomeWrapper__title">Expense CSV Reader</h1>
            <form ref={form} onSubmit={e => handleSubmit(e)} className="HomeWrapper__form">
                <label className="HomeWrapper__form__label">Your CSV file:</label>
                <input name="file" className="HomeWrapper__form__input" type="file" accept=".csv" placeholder="Upload CSV file"/>
                <button className="HomeWrapper__form__button" type="submit">Submit</button>
            </form>
            <NavLink to="/instruction">Instructions</NavLink>
        </section>
    )
}

export { Home };