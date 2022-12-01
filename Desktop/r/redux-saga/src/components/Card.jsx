import React, { useState } from "react";

const Card = ({ d }) => {
  const [latest, setLatest] = useState([]);
  return (
    <div className="card" key={d?.id}>
      <div className="picture-container">
        <div className="data-picture">
          <img src={d?.image} alt="" />
        </div>
      </div>
      <div className="data-info-container">
        <div className="title-container">
          <h1
            onClick={() => {
              setLatest(d);
            }}
            className="title-d"
          >{`${d?.title.substring(0, 66)}`}</h1>
        </div>
        <div className="description-container">
          <p className="description">{d?.description}</p>
        </div>
        <div className="price-container">
          <h2 className="price-title">Price:</h2>

          <h2 className="price-name">{d?.price}$</h2>
        </div>
        <div className="flex-container">
          <div className="category-container">
            <h2>Category:</h2>

            <h2 className="category-name">{d?.category}</h2>
          </div>
          <div className="date-container">
            <h2>{`Rating: ${d?.rating?.rate}`}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
