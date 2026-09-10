import Hero from "../components/Hero";
import Products from "../components/Products";

function Home({ cart, setCart }) {
    return (
        <div>
            <Hero />
            <Products cart={cart} setCart={setCart} />
            <h1>Welcome to My Store</h1>
            <ul>
                <li>Discover our products</li>
                <li>Enjoy our services</li>
                <li>Shop with confidence</li>
            </ul>
        </div>
    );
}
export default Home;