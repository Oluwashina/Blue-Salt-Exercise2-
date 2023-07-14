import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from './pages/Dashboard';
import SidebarComp from './components/Sidebar';

function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
             <Route path="/" exact element={
              <SidebarComp children={<DashboardPage />} />
            
             } />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
