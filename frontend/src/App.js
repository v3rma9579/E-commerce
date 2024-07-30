import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/Hero'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Newsletter } from './Components/Newsletter/Newsletter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />}>
          </Route>
        </Routes>
        <Newsletter/>
      </BrowserRouter>

    </div>
  );
}

export default App;
