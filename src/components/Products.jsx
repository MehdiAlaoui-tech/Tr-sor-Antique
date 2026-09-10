import { Link } from 'react-router-dom';

function Products({products}) {
  return (
    <section className="bg-green-950 p-3">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-amber-200">collection vip</h1>
        <p className="text-2xl font-bold text-amber-200">objects authentiques rares</p>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {products.map((product) => (
          <Link key={product.id} to={`/produit/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="h-auto w-auto aspect-square object-cover hover:scale-120 transition duration-600 border-2 border-amber-200"
            />
            <h2 className="mt-2 text-xl font-bold text-amber-200">{product.name}</h2>
            <p className="font-bold text-amber-200">{product.price} DH</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Products;