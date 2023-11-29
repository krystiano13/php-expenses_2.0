import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Home/Home.min.css';

const Home = () => {
    return (
        <section className="HomeWrapper">
            <h1 className="HomeWrapper__title">Expense CSV Reader</h1>
            <form className="HomeWrapper__form">
                <label className="HomeWrapper__form__label">Your CSV file:</label>
                <input className="HomeWrapper__form__input" type="file" accept=".csv" placeholder="Upload CSV file"/>
                <button className="HomeWrapper__form__button" type="submit">Submit</button>
            </form>
            <NavLink to="/instruction">Instructions</NavLink>
        </section>
    )
}

export { Home };