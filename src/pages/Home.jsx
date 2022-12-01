import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const Home = () => {
  const latest = useSelector((state) => state.latestProduct.product);

  return (
    <>
      <main>
        <div className="flex">
          <h1 className="latest">Latest Product</h1>
          <div className="data">
            <div className="cards" id="card">
              {latest ? <Card d={latest} /> : "no product"}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
