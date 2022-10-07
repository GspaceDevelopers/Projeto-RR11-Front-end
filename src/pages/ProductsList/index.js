import React, { useEffect, useState } from "react";
import "./Styles.css";
import Container from "./Container/index";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar";

const ListProducts = () => {
  const [produtos, setProdutos] = useState([]);
  const [filterValue, SetFilterValue] = useState([]);
  const [produtosFilter, setProdutosFilter] = useState([]);
  useEffect(() => {
    fetch("https://apigspace.herokuapp.com/produtos")
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data);
      })
      .catch((error) => {
        console.log(produtos.categoria);
        console.log(error);
      });
  }, []);

  // FilterApi
  function FilterProducts(filterValue) {
    let ArrayProducts = produtos.filter((item) => {
      return item.categoria == filterValue;
    });

    setProdutos(ArrayProducts);
  }

  return (
    <>
      {" "}
      <Header />
      <div className="side-product">
        <SideBar />
        <div className="list-products">
          <input
            type="text"
            onChange={(e) => SetFilterValue(e.target.value)}
            id=""
          />
          <button onClick={FilterProducts}>teste</button>
          {produtos.map((produto) => {
            return (
              <Container
                key={produto._id}
                image={produto.imgurl}
                tittle={produto.modelo}
                preco={produto.preco}
                category={produto.categoria}
                id={produto._id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListProducts;
