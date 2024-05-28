import React from 'react';

const TerminalState = ({ terminalStateData }) => {
    return (
        <section>
            <h3>오늘상태조회</h3>
            <table border='1' cellSpacing='1'>
                <thead>
                <tr align='center'>
                    <th>수집시간</th>
                    <th>PDERROR</th>
                    <th>품절정보</th>
                    <th>고장정보</th>
                </tr>
                </thead>
                <tbody>
                {terminalStateData.length > 0 ? (
                    terminalStateData.map((item, index) => (
                        <tr key={index} align='center'>
                            <td>{item.responseDate}</td>
                            <td>{item.pdError}</td>
                            <td>{item.resCode}</td>
                            <td>{item.resCode}</td>
                        </tr>
                    ))
                ) : (
                    <tr align='center'>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                )}
                </tbody>
            </table>
        </section>
    );
};

export default TerminalState;