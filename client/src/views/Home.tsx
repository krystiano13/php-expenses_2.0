import React from 'react';
import '../styles/Home/Home.min.css';

const Home = () => {
    return (
        <section className="HomeWrapper">
            <h1 className="HomeWrapper__title">Expense CSV Reader</h1>
            <form className="HomeWrapper__form">
                <input className="HomeWrapper__form__input" type="file" accept=".csv" placeholder="Upload CSV file"/>
                <button className="HomeWrapper__button" type="submit">Submit</button>
            </form>
        </section>
    )
}

export { Home };