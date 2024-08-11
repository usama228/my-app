
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchBar, NameInput } from './components/InputComponents';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import About from './components/About';
import DownloadSection from './components/DownloadSection';
import HomeSection from './components/HomeSection';
import { CartProvider } from './contexts/CartContext';
import WomenSuits from './components/WomenSuits';
import ChildSuits from './components/ChildSuits';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Header />
          <div className="search-name">
            <SearchBar />
            <NameInput />
          </div>
          <main className="content">
            <Routes>
              <Route path="/" element={<HomeSection />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/women-suits" element={<WomenSuits />} />
              <Route path="/child-suits" element={<ChildSuits />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <DownloadSection />
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;




