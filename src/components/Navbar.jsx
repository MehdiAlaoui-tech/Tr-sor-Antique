import { ShoppingCart } from "lucide-react";
import { UserRound } from "lucide-react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar ({ cart, searchTerm, setSearchTerm }) {
  return (
    <section className="navbar flex-wrap w-full items-center gap-4 bg-green-950 p-4">
      <div className="navbar-brand flex items-center justify-center gap-2 text-amber-100">
        <img
          src="/logo.png"
          alt="Tresor Antique"
          className="navbar-logo h-12 w-12 object-contain"
        />
        <div className="navbar-brand-text">
          <h1 className="navbar-title">Tresor Antique</h1>
          <p className="navbar-tagline">rare & authentique</p>
        </div>
      </div>

      <div className="navbar-search relative left-12 w-full max-w-md text-amber-100">
        <input
     type="text"
    placeholder= "Rechercher un meuble..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="h-10 w-full rounded-2xl border px-4 pr-10 text-amber-200 placeholder:text-amber-200" />
     <button
    type="button"
    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
  >
    <Search className="h-5 w-5" />
  </button>
</div>
      
  

      <div className="navbar-actions ml-auto flex shrink-0 items-center gap-10 text-amber-100">
        <div className="group relative">
          <UserRound className="cursor-pointer" />
          <form className=" absolute top-12.5 right-0 z-10
           w-250 h-0 group-hover:h-55
           overflow-hidden
           bg-amber-700 shadow-2xl rounded-b-xl
           transition-all duration-700 ease-in-out">
          <div className="p-6 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-600 delay-150">
      <button className="btn btn-dash bg-black text-amber-200">Connexion</button>
      <Link to="/cart">
      <h3 className="text-amber-200 text-[20px] cursor-pointer hover:text-gray-600">Mes commandes</h3>
      </Link>
      <Link to="/products">
      <h3 className="text-amber-200 text-[20px] cursor-pointer hover:text-gray-600">Produit</h3>
      </Link>
     <div className="navbar-contact">
      <a href="mailto:mehdi.al.business@example.com">
      <h3 className="text-amber-200 text-[20px] cursor-pointer hover:text-gray-600 transition-colors duration-200">
      Contact
    </h3>
  </a>
</div>
</div>

          </form>
        </div>
        <Link to="/shoppingcart" className="relative">
  <ShoppingCart className="cart-icon h-6 w-6" />
  <span className="absolute -right-3 -top-3 text-sm">{cart.length}</span>
        </Link>
      </div>
    </section>
  );
}

export default Navbar;