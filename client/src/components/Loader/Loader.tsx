import React from 'react';
import './Loader.min.css';

const Loader = () => {
    return (
        <section className="Loader">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}

export { Loader };