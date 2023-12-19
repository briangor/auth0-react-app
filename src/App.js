import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Public from './pages/Public';
import Protected from './pages/Protected';

// https://www.w3schools.com/react/react_router.asp // check this out

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/public" element={<Public />}></Route>
      <Route path="/protected" element={<Protected />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
