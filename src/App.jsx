import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Catalogue from './components/Catalogue';
import Cart from './components/Cart';
import { products } from './data/products';
import Features from './components/feature';

function App() {
  // Tous les useState au même niveau, à la racine, à la suite
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [searchTerm, setSearchTerm] = useState('');

  // Sauvegarde automatique du panier
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Recalculé à chaque render (donc à chaque changement de searchTerm)
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function addToCart(product) {
    setCart([...cart, product]);
  }
   const [email, setEmail] = useState("");

  return (
    <BrowserRouter>
      <Navbar cart={cart} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Features />
              <Hero />
              <Products products={filteredProducts} addToCart={addToCart} />
              <Newsletter email={email} setEmail={setEmail} />
              <Footer />
            </>
          }
        />
        <Route
          path="/produit/:id"
          element={<Catalogue products={products} addToCart={addToCart} />}
        />
        <Route path="/shoppingcart" element={<Cart cart={cart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="*" element={<p className="p-8 text-blue-800 text-4xl">Page introuvable.</p>} />
        <Route
    path="/products"
    element={<Products products={filteredProducts} addToCart={addToCart} />}
  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;