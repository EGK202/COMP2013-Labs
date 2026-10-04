function Card({ pic, country, location, rating, price }) {
  return (
    <div className="card">
      {pic}

      <div className="card-content">
        <h3>{country}</h3>
        <p>{location}</p>

        <p
          className="rating"
          style={{
            color: rating > 4 ? "green" : "red",
          }}
        >
          ★ {rating}
        </p>

        <p>${price}/night</p>
      </div>
    </div>
  );
}

export default Card;