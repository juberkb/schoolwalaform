import './App.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import Navbar from './Navbar.js';
import MyForm from "./Myform.js"
import StockManagement from './StockManagement.js';
import TableData from './TableData.js';
// import Signup from './Signup.js';
import StudentAdmission from "./StudentAdmission.js"
import AssignStock from './Components/AssignStock.js';
import PurchaseEntry from './Components/PurchaseEntry.js';
import StockReport from './Components/StockReport.js';

function App() {
  const data = [
    { name: 'Home', link: '/' },
   
  ];

  return (
    <div className="App">
      <header className="App-header">
      <ChakraProvider>
        <Router>
          <Navbar data={data} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/studentform" element={<MyForm />} />
            <Route path="/stockManagement" element={<StockManagement />} />
            <Route path="/tableData" element={<TableData />} />
  
        <Route path="/student-admission" element={<StudentAdmission />} />

                  <Route path="/assignStock" element={<AssignStock />} />
        <Route path="/purchaseEntry" element={<PurchaseEntry />} />
        <Route path="/stockReport" element={<StockReport/>} />

          </Routes>
          {/* <Footer /> */}
        </Router>
        </ChakraProvider>
      </header>
    </div>
  );
}

export default App;
