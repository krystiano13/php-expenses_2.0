import React, { useEffect } from 'react';
import '../styles/Table/Table.min.css';

interface Props {
    data: string[][]
}

const Table:React.FC<Props> = ({ data }) => {
    return (
        <section className="Table">
            <table>
                <tr>
                    <th>Date</th>
                    <th>Check #</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
                {
                    data.map(item => (
                        <tr>
                            {
                                item.map(element => (
                                    <td>{ element }</td>
                                ))
                            }
                        </tr>
                    ))
                }
            </table>
        </section>
    )
}

export { Table };