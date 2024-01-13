import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Home'
import APropos from './APropos'
import Housing from './Housing'
import Error from './Error'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:id" element={<Housing />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
