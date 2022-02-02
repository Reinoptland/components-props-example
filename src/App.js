import "./App.css";
import sedanIcon from "./images/icon-sedans.svg";
import suvIcon from "./images/icon-suvs.svg";
import luxuryIcon from "./images/icon-luxury.svg";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="container">
      <ProductCard
        title="Sedan"
        description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
        icon={sedanIcon}
        color="orange"
      />
      <ProductCard
        title="Suvs"
        description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        icon={suvIcon}
        color="cyan"
      />
      <ProductCard
        title="Luxury"
        description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
        icon={luxuryIcon}
        color="dark-cyan"
      />
    </div>
  );
}

export default App;
