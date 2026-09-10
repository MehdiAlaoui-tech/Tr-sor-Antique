# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Revision: `find` et `filter`

| Methode | Sert a | Retourne | Exemple |
| --- | --- | --- | --- |
| `find` | Chercher un seul element | Un objet ou `undefined` | `products.find((product) => product.id === 2)` |
| `filter` | Garder plusieurs elements | Un tableau | `products.filter((product) => product.price <= 80)` |

### Exemple avec les produits

```js
const products = [
	{ id: 1, name: "Nike Shoes", price: 100 },
	{ id: 2, name: "Jacket", price: 80 },
	{ id: 3, name: "Sandal", price: 50 },
];

// Un seul produit : Jacket
const product = products.find((product) => product.id === 2);

// Plusieurs produits : Jacket et Sandal
const cheapProducts = products.filter((product) => product.price <= 80);
```

### A retenir

- `find` retourne le premier element qui correspond.
- `filter` retourne tous les elements qui correspondent.
- Avec `find`, le resultat peut etre `undefined` si aucun produit n'est trouve.
- Avec `filter`, le resultat est toujours un tableau, meme s'il est vide.

### Quel code mettre a la place de `products.map` ?

#### Cas 1 : afficher un seul produit avec `find`

`find` retourne un objet, donc on n'utilise pas `map`.

```jsx
const product = products.find((product) => product.id === 2);

{product && (
	<div>
		<h3>{product.name}</h3>
		<p>${product.price}</p>
	</div>
)}
```

#### Cas 2 : afficher plusieurs produits avec `filter`

`filter` retourne un tableau. Pour afficher chaque produit, on utilise ensuite `map`.

```jsx
const cheapProducts = products.filter((product) => product.price <= 80);

{cheapProducts.map((product) => (
	<div key={product.id}>
		<h3>{product.name}</h3>
		<p>${product.price}</p>
	</div>
))}
```

Resume : `find` + affichage direct pour un produit ; `filter` + `map` pour plusieurs produits.

## Parcours de revision du site e-commerce

Cette section resume les notions importantes a apprendre dans l'ordre.

### 1. `map` : afficher une liste

`map` parcourt un tableau et retourne un element JSX pour chaque produit.
Dans ton fichier `Products.jsx` :

```jsx
{products.map((product) => (
	<div key={product.id}>
		<h3>{product.name}</h3>
		<p>${product.price}</p>
	</div>
))}
```

`key={product.id}` donne une cle unique a chaque element.

### 2. `props` : transmettre des donnees

Les props permettent au composant parent de donner des donnees a un composant enfant.
Dans `App.jsx` :

```jsx
<Navbar cart={cart} />
<Products cart={cart} setCart={setCart} />
```

Dans le composant enfant :

```jsx
function Products({ cart, setCart }) {
	// cart contient le panier
	// setCart permet de le modifier
}
```

### 3. `useState` : memoriser une valeur

`useState` conserve une valeur et provoque un nouveau rendu quand elle change.
Dans `Navbar.jsx` :

```jsx
const [search, setSearch] = useState("");
```

`search` est la valeur actuelle et `setSearch` est la fonction de modification.

### 4. `input` et `onChange` : recuperer une saisie

`event.target.value` recupere le texte ecrit dans l'input.

```jsx
<input
	value={search}
	placeholder="Rechercher"
	onChange={(event) => setSearch(event.target.value)}
/>
```

Version avec une fonction separee :

```jsx
function handleChange(event) {
	setSearch(event.target.value);
}

<input value={search} onChange={handleChange} />
```

### 5. `onClick` : reagir a un clic

Dans `Products.jsx`, le bouton ajoute le produit au panier :

```jsx
<button onClick={() => setCart([...cart, product])}>
	Add to Cart
</button>
```

`...cart` conserve les anciens produits et `product` ajoute le nouveau.

### 6. Conditions : afficher selon une situation

Avec `&&`, le JSX est affiche seulement si la condition est vraie.

```jsx
{cart.length > 0 && <p>Le panier contient des produits.</p>}
```

Avec un operateur ternaire, on choisit entre deux affichages :

```jsx
{cart.length === 0 ? <p>Panier vide</p> : <Cart cart={cart} />}
```

### 7. Panier : ajouter, supprimer et modifier

Ajouter un produit :

```jsx
setCart([...cart, product]);
```

Supprimer un produit avec `filter` :

```jsx
setCart(cart.filter((product) => product.id !== productId));
```

Modifier une quantite avec `map` :

```jsx
setCart(
	cart.map((product) =>
		product.id === productId
			? { ...product, quantity: product.quantity + 1 }
			: product
	)
);
```

### 8. `find` et `filter` : chercher des produits

`find` retourne un seul produit ou `undefined` :

```jsx
const product = products.find((product) => product.id === 2);
```

`filter` retourne un tableau de produits :

```jsx
const cheapProducts = products.filter((product) => product.price <= 80);
```

Pour afficher le resultat de `filter`, on utilise ensuite `map` :

```jsx
{cheapProducts.map((product) => <p key={product.id}>{product.name}</p>)}
```

### 9. Recherche avec `filter` et `input`

La recherche combine la valeur de l'input avec `filter` :

```jsx
const visibleProducts = products.filter((product) =>
	product.name.toLowerCase().includes(search.toLowerCase())
);
```

Puis on affiche `visibleProducts` avec `map`.

### 10. `localStorage` : conserver le panier

Dans `App.jsx`, le panier est recupere apres une actualisation :

```jsx
const [cart, setCart] = useState(() => {
	const storedCart = localStorage.getItem("cart");
	return storedCart ? JSON.parse(storedCart) : [];
});
```

`JSON.parse` transforme le texte en tableau JavaScript.

### 11. `useEffect` : executer une action apres un changement

Dans `App.jsx`, le panier est sauvegarde quand `cart` change :

```jsx
useEffect(() => {
	localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);
```

`JSON.stringify` transforme le tableau en texte pour `localStorage`.

### 12. React Router : changer de page

Les routes actuelles sont definies dans `App.jsx` :

```jsx
<Routes>
	<Route path="/" element={<Home cart={cart} setCart={setCart} />} />
	<Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
	<Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
</Routes>
```

Pour naviguer sans recharger la page, utilise `Link` :

```jsx
<Link to="/cart">Voir le panier</Link>
```

### 13. `fetch` et API : charger des produits

Plus tard, les produits pourront venir d'un serveur :

```jsx
const response = await fetch("https://example.com/products");
const data = await response.json();
setProducts(data);
```

Il faudra aussi prevoir un etat de chargement et un etat d'erreur.

### 14. Formulaires et validation

Un formulaire recupere ses donnees avec `onSubmit` :

```jsx
function handleSubmit(event) {
	event.preventDefault();
	console.log(email);
}

<form onSubmit={handleSubmit}>
	<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
	<button type="submit">Envoyer</button>
</form>
```

`event.preventDefault()` empeche le rechargement automatique de la page.

### 15. Responsive design et accessibilite

Ton projet utilise deja des classes responsive comme `md:grid-cols-3`.
Pense aussi a :

```jsx
<img src={product.image} alt={product.name} />
<button type="button">Ajouter au panier</button>
```

Chaque image doit avoir un `alt` et chaque bouton doit avoir une action claire.

### Ordre conseille pour apprendre

```text
map -> props -> useState -> input/onChange -> onClick
-> conditions -> panier -> find/filter -> recherche
-> localStorage -> useEffect -> React Router
-> fetch/API -> formulaires -> validation -> accessibilite
```
