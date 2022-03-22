import "./Card.css";

export default function Card() {
  return (
    <div className="product-item">
      <div>
        <h2>Café</h2>
        <p>Tipo de Cafe: Torrado</p>
        <p>$100</p>
        <div className="item-button">
          <button>-</button>
          <button> Comprar</button>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}
