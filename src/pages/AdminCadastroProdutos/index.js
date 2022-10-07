import React, { useContext, useState } from "react";
import "./Styles.css";

import SideBar from "../../Components/SideBar";
import Header from "../../Components/Header";

import api from "../../services/api";

import firebase from "../../services/firebaseconnection";
import { AuthContext } from "../../Contexts/auth";

const AdminCadastroProdutos = () => {
  const { user } = useContext(AuthContext);
  const [imageurl, setImageurl] = useState();
  const [imageurl2, setImageurl2] = useState();
  const [imageurl3, setImageurl3] = useState();
  const [imageurl4, setImageurl4] = useState();
  const [imageurl5, setImageurl5] = useState();
  const [imageurl6, setImageurl6] = useState();
  const [imageurl7, setImageurl7] = useState();
  const [imageurl8, setImageurl8] = useState();
  const [urlFoto, setUrlFoto] = useState([]);
  const [urlFoto2, setUrlFoto2] = useState([]);
  const [urlFoto3, setUrlFoto3] = useState([]);
  const [urlFoto4, setUrlFoto4] = useState([]);
  const [urlFoto5, setUrlFoto5] = useState([]);
  const [urlFoto6, setUrlFoto6] = useState([]);
  const [urlFoto7, setUrlFoto7] = useState([]);
  const [urlFoto8, setUrlFoto8] = useState([]);
  async function fileImage(e) {
    const imageurlLet = e.target.files[0];

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${imageurlLet.name}`)
      .put(imageurlLet)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(imageurlLet.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto(url);
          });
      });
  }

  async function fileImage2(e) {
    const imageurlLet2 = e.target.files[0];

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${imageurlLet2.name}`)
      .put(imageurlLet2)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(imageurlLet2.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto2(url);
          });
      });
  }

  async function fileImage3(e) {
    const imageurlLet3 = e.target.files[0];

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${imageurlLet3.name}`)
      .put(imageurlLet3)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(imageurlLet3.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto3(url);
          });
      });
  }

  async function fileImage4(e) {
    const imageurlLet4 = e.target.files[0];

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${imageurlLet4.name}`)
      .put(imageurlLet4)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(imageurlLet4.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto4(url);
          });
      });
  }
  async function fileImage5(e) {
    const imageurlLet5 = e.target.files[0];

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${imageurlLet5.name}`)
      .put(imageurlLet5)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(imageurlLet5.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto5(url);
          });
      });
  }

  async function fileImage6(e) {
    const imageurlLet6 = e.target.files[0];

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${imageurlLet6.name}`)
      .put(imageurlLet6)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(imageurlLet6.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto6(url);
          });
      });
  }

  async function fileImage7(e) {
    const imageurlLet7 = e.target.files[0];

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${imageurlLet7.name}`)
      .put(imageurlLet7)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(imageurlLet7.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto7(url);
          });
      });
  }

  async function fileImage8(e) {
    const imageurlLet8 = e.target.files[0];

    const userUID = user.uid;

    const loadImage = await firebase
      .storage()
      .ref(`image/${userUID}/${imageurlLet8.name}`)
      .put(imageurlLet8)
      .then(async () => {
        await firebase
          .storage()
          .ref(`image/${userUID}`)
          .child(imageurlLet8.name)
          .getDownloadURL()
          .then(async (url) => {
            setUrlFoto8(url);
          });
      });
  }
  async function uploadImage(e) {
    e.preventDefault();
    const produto = document.getElementById("produto").value;
    const cor = document.getElementById("cor").value;
    const categoria = document.getElementById("categoria").value;
    const tamanho = document.getElementById("tamanho").value;
    const tamanho2 = document.getElementById("tamanho2").value;
    const tamanho3 = document.getElementById("tamanho3").value;
    const tamanho4 = document.getElementById("tamanho4").value;
    const preco = document.getElementById("preco").value;
    const descricao = document.getElementById("description").value;
    const modelo = document.getElementById("modelo").value;
    // const marca = document.getElementById("marca").value;
    // const cor2 = document.getElementById(" cor2 ").value;
    // const cor3 = document.getElementById("cor3").value;
    // const cor4 = document.getElementById("cor4").value;
    alert(urlFoto);
    let config = {
      headers: {
        Authorization: "Access-Control-Allow-Origin",
      },
    };

    let data = {
      produto: produto,
      categoria: categoria,
      descricao: descricao,
      imgurl: String(urlFoto),
      imgurl2: String(urlFoto2),
      imgurl3: String(urlFoto3),
      imgurl4: String(urlFoto4),
      imgurl5: String(urlFoto5),
      imgurl6: String(urlFoto6),
      imgurl7: String(urlFoto7),
      imgurl8: String(urlFoto8),
      preco: preco,
      marca: "marca",
      tamanho: tamanho,
      tamanho2: tamanho2,
      tamanho3: tamanho3,
      tamanho4: tamanho4,
      cor: cor,
      cor2: "cor2",
      cor3: "cor3",
      cor4: "cor4",
      modelo: modelo,
    };
    await api
      .post(
        "/produtos",
        data,
        config
        // produto: "produto",
        // categoria: "categoria",
        // descricao: "descricao",
        // imgurl: "urlFoto",
        // imgurl2: "urlFoto2",
        // imgurl3: "urlFoto3",
        // imgurl4: "urlFoto4",
        // imgurl5: "urlFoto5",
        // imgurl6: "urlFoto6",
        // imgurl7: "urlFoto7",
        // imgurl8: "urlFoto8",
        // preco: "preco",
        // marca: "marca",
        // tamanho: "tamanho",
        // tamanho2: "tamanho2",
        // tamanho3: "tamanho3",
        // tamanho4: "tamanho4",
        // cor: "cor",
        // cor2: "cor2",
        // cor3: "cor3",
        // cor4: "cor4",
        // modelo: "modelo",
      )
      .then(() => {
        alert("post feito");
        // produto = "";
        // categoria = "";
        // descricao = "";

        // preco = "";
        // // marca = "";
        // tamanho = "";
        // tamanho2 = "";
        // tamanho3 = "";
        // tamanho4 = "";
        // cor = "";
        // // cor2 = "";
        // // cor3 = "";
        // // cor4 = "";
        // modelo = "";
        // toast.success("Cadastrado com sucesso");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div className="background-create">
      <Header />
      <div className="side-product">
        <SideBar />
        <div className="create-products">
          <h1>Cadastro de produtos</h1>
          <form id="form-create" onSubmit={uploadImage}>
            <input
              type="text"
              placeholder="Nome do produto"
              name="produto"
              id="produto"
            />
            <div className="input-categoria">
              <input type="text" name="cor" placeholder="cor" id="cor" />
              <input
                type="text"
                name="categoria"
                placeholder="categoria"
                id="categoria"
              />
            </div>
            <div className="input-number">
              <input
                type="text"
                name="modelo"
                id="modelo"
                placeholder="modelo"
              />
              <input
                type="text"
                name="tamanho"
                placeholder="tamanho"
                id="tamanho"
              />
              <input
                type="text"
                name="tamanho"
                placeholder="tamanho"
                id="tamanho2"
              />
              <input
                type="text"
                name="tamanho"
                placeholder="tamanho"
                id="tamanho3"
              />
              <input
                type="text"
                name="tamanho"
                placeholder="tamanho"
                id="tamanho4"
              />

              <input type="text" name="preco" placeholder="preço" id="preco" />
            </div>
            <div>
              <input
                type="file"
                multiple="multiple"
                accept="image/*"
                onChange={fileImage}
                id=""
              />

              <input
                type="file"
                multiple="multiple"
                accept="image/*"
                onChange={fileImage2}
                id=""
              />
              <input
                type="file"
                multiple="multiple"
                accept="image/*"
                onChange={fileImage3}
                id=""
              />
              <input
                type="file"
                multiple="multiple"
                accept="image/*"
                onChange={fileImage4}
                id=""
              />
              <input
                type="file"
                multiple="multiple"
                accept="image/*"
                onChange={fileImage5}
                id=""
              />
              <input
                type="file"
                multiple="multiple"
                accept="image/*"
                onChange={fileImage6}
                id=""
              />
              <input
                type="file"
                multiple="multiple"
                accept="image/*"
                onChange={fileImage7}
                id=""
              />
              <input
                type="file"
                multiple="multiple"
                accept="image/*"
                onChange={fileImage8}
                id=""
              />
            </div>
            <textarea
              name=""
              id="description"
              cols="30"
              rows="10"
              placeholder="Descrição"
            ></textarea>

            <button id="submit" type="submit">
              Cadastrar
            </button>
          </form>
          <br />
        </div>
      </div>
    </div>
  );
};

export default AdminCadastroProdutos;
