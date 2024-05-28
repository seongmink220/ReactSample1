import React from 'react';

const TerminalState = ({ terminalStateData }) => {
    return (
        <section>
            <h3>오늘상태조회</h3>
            <table border='1' cellSpacing='1'>
                <thead>
                <tr>
                    <th>수집시간</th>
                    <th>PDERROR</th>
                    <th>품절정보</th>
                    <th>고장정보</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{terminalStateData ? terminalStateData[0].responseDate : '-'}</td>
                    <td>{terminalStateData ? terminalStateData[0].pdError : '-'}</td>
                    <td>{terminalStateData ? terminalStateData[0].resCode : '-'}</td>
                    <td>{terminalStateData ? terminalStateData[0].resCode : '-'}</td>
                </tr>
                </tbody>
            </table>
        </section>
    );
};

export default TerminalState;