import logo from './logo.svg';
import './App.css';

//components
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import CodeforInterview from './components/CodeforInterview';
import AllUser from './components/AllUser';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CodeforInterview />} />
        <Route path="/All" element={<AllUser />} />
        <Route path="/Add" element={<AddUser />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
