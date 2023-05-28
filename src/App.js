
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import TableComponent from './components/Table/TableComponent';
import NavigationBar from './components/Navbar/NavigationBar';
import Table from './components/Card/Table';


function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/table" element={<TableComponent />} />
          <Route path="/card" element={<Table />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;