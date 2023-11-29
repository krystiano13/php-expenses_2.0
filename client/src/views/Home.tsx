import React, { useRef } from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Home/Home.min.css';

const Home = () => {

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
                console.log(data);
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