import React from 'react';

interface Props {
    data: string[][]
}

const Table:React.FC<Props> = ({ data }) => {
    return (
        <section className="Table">
            <table>
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