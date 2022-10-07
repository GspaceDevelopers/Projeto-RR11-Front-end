import React, { useState, useEffect } from "react";
import "./Styles.css";
import Modal from "./Modal/modal";
import api from "../../../services/api";
import { toast } from "react-toastify";

const Container = (props) => {
  const [produtosFilter, setProdutosFilter] = useState([]);
  useEffect(() => {
    fetch("https://apigspace.herokuapp.com/produtos")
      .then((response) => response.json())
      .then((data) => {
        setProdutosFilter(data);
      });
  }, []);
  let config = {
    headers: {
      Authorization: "Access-Control-Allow-Origin",
    },
  };
  async function delItem(id) {
    await api
      .delete(`/produtos/${id}`, config)
      .then(() => {
        toast.success("Excluido com sucesso");
        window.location.reload();
      })
      .catch((error) => {
        toast.error(error);
      });
  }
  return (
    <div className="produto-center">
      <div className="produto-list">
        <img src={props.image} alt="produto" />{" "}
        <div className="product-ajust">
          <div className="produto-info">
            <h2>{props.tittle}</h2> <h2>R${props.preco}</h2>
          </div>
          <div className="ajust-button-list">
            <div className="modal-ajust">
              <Modal testId={props.id} produtos={props.tittle} />
            </div>
            <div>
              <button id="delete-product" onClick={() => delItem(props.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
