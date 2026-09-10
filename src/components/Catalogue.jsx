import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Catalogue({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
  return (
    <div className="p-8 text-center">
      <p className="text-4xl">Produit introuvable</p>
      <Link to="/" className="text-red-700 underline mt-4 inline-block text-2xl">
        Retour à l'accueil
      </Link>
    </div>
  );
}

  return (
    <section className="p-8">
      <img src={product.image} alt={product.name} className="min-h-100 h-40 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg" />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-2xl mt-2">{product.price} DH</p>
      <p className="text-black font-serif">{product.description}</p>
      <button
        className="btn btn-primary m-4 bg-red-800"
        onClick={() => addToCart?.(product)}
      >
        Ajouter au panier
      </button>
      <hr className="mx-auto w-48 border-red-800 m-10 " />
    <div className="flex items-center justify-center">
      <img
          src="/logo.png"
          alt="Tresor Antique"
          className="navbar-logo h-12 w-12 object-contain m-15"
        />
    </div>
   </section>
    
  );
}

export default Catalogue;