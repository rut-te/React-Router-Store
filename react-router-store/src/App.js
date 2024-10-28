import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Jewelry from './components/Jewelry/Jewelry';
import Electronics from './components/Electronics/Electronics';
import Books from './components/Books/Books';

function App() {

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/jewelry">Jewelry</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/books">Books</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jewelry' element={<Jewelry />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/books' element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;