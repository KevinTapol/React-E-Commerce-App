// Controller
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { Shop } from './views/shop'
import { Cart } from './views/cart'
import { ShopContextProvider } from './components/shop-context';

// acting as routes abstracted from Controller/App.js
function App() {
  return <div className='App'>
    <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </ShopContextProvider>
  </div>;
}

export default App;
