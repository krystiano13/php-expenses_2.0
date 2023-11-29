import React from 'react';
import { useNavigate } from "react-router";
import '../styles/Instruction/Instruction.min.css';

const Instruction = () => {
    const navigate = useNavigate();
    return (
        <section className="Instruction">
            <h1 className="Instruction__title">Instruction</h1>
            <p className="Instruction__content">Columns of the imported CSV table should be named: Date,Check #,Description and Amount</p>
            <button
                onClick={() => navigate('/')}
                className="Instruction__button">
                Go Back
            </button>
        </section>
    )
}

export { Instruction };