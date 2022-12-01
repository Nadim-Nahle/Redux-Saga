import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <main>
        <div className="flex">
          <div className="data">
            <div className="cards" id="card">
              <Card />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
