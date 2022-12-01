import React, { useEffect, useState } from "react";
import axios from "axios";
import "./dashbaord.css";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getProductsFetch } from "../../redux/slices/allProducts";

const Dashboard = () => {
  const [productData, setProductData] = useState([]);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  // const getData = async () => {
  //   const response = await axios.get("https://fakestoreapi.com/products");
  //   const data = response.data;
  //   setProductData(data);
  // };

  useEffect(() => {
    // getData();
    dispatch(getProductsFetch());
  }, [dispatch]);

  return (
    <>
      <main>
        <div className="flex">
          <div className="data">
            <div className="cards" id="card">
              {products?.map((d) => (
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
