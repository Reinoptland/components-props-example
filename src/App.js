import "./App.css";
import sedanIcon from "./images/icon-sedans.svg";
import suvIcon from "./images/icon-suvs.svg";
import luxuryIcon from "./images/icon-luxury.svg";

function App() {
  return (
    <div class="container">
      <div class="card card--orange">
        <img src={sedanIcon} class="card__icon" />
        <h2 class="card__title">Sedans</h2>
        <p class="card__description">
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button class="card__button-cta card__button-cta--orange">
          Learn More
        </button>
      </div>
      <div class="card card--cyan">
        <img src={suvIcon} class="card__icon" />
        <h2 class="card__title">SUVs</h2>
        <p class="card__description">
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <button class="card__button-cta card__button-cta--cyan">
          Learn More
        </button>
      </div>
      <div class="card card--dark-cyan">
        <img src={luxuryIcon} class="card__icon" />
        <h2 class="card__title">Luxury</h2>
        <p class="card__description">
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button class="card__button-cta card__button-cta--dark-cyan">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default App;
