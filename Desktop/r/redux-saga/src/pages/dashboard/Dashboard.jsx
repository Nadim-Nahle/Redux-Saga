import React, { useEffect, useState } from "react";
import axios from "axios";
import "./dashbaord.css";
import Card from "../../components/Card";

const Dashboard = () => {
  const [productData, setProductData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = response.data;
    setProductData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main>
        <div className="flex">
          <div className="data">
            <div className="cards" id="card">
              {productData?.map((d) => (
                <Card d={d} key={d.id} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
