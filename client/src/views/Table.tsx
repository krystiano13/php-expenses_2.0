import React from 'react';
import '../styles/Table/Table.min.css';

import type {income} from "../App";

interface Props {
    data: string[][],
    income: income
}

const Table: React.FC<Props> = ({data, income}) => {
    return (
        <section className="Table">
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Check #</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map(item => (
                        <tr>
                            {
                                item.map(element => (
                                    <td>{element}</td>
                                ))
                            }
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <h2>Total Income: {income?.income.toFixed(2)}</h2>
            <h2>Total Expenses: {income?.expenses.toFixed(2)}</h2>
            <h2>NET: {income?.net.toFixed(2)}</h2>
        </section>
    )
}

export {Table};