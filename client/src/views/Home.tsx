import React from 'react';

const Home = () => {
    return (
        <section className="HomeWrapper">
            <h1>Expense CSV Reader</h1>
            <form>
                <input type="file" accept=".csv" placeholder="Upload CSV file"/>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export { Home };