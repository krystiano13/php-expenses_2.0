import React from 'react';

const Instruction = () => {
    return (
        <section className="Instruction">
            <h1 className="Instruction__title">Instruction</h1>
            <p className="Instruction__content">Columns of the imported CSV table should be named: Date,Check #,Description and Amount</p>
            <button className="Instruction__button">Go Back</button>
        </section>
    )
}

export { Instruction };