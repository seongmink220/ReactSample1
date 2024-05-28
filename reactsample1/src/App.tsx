// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';
//
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TerminalMain from "./terminal/Main";
import DashBoardMain from './dashBoard/Main';


function App() {
  return (
      <section className="todoapp">

          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<DashBoardMain />}></Route>
              </Routes>
              <Routes>
                  <Route path="/terminal" element={<TerminalMain/>}></Route>
              </Routes>
          </BrowserRouter>

      </section>
  )
}

export default App
