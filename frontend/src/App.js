import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card1 from './component/Card1';
import Form2 from './component/Form2';
import HistoryPage from './component/HistoryPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<><Card1 /><Form2 /></>} />
                <Route path="/history" element={<HistoryPage />} />
            </Routes>
        </Router>
    );
}

export default App;

