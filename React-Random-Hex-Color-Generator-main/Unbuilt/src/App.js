import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";


function App() {
  const [hex, setHex] = useState("#ffffff");
  function randomHex() {
    const randomHex = "#" + Math.floor(Math.random() * 16777721).toString(16);
    // toString(16) ile gelen sayıyı hexedecimal'e çevirdim.
    setHex(randomHex);

    document.body.style.backgroundColor = hex;
  }

  const tost = () => {
    toast("Kopyalandı :)");
  }
  return (
    <div className="container App">
      <div className="row row-cols-md my-5 text-center">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          theme="dark"
        />
        <h1>{hex}</h1>
        <div>
          <button
            onClick={randomHex}
            className="btn btn-dark w-25 mx-3 btn-lg shadow-lg">
            yeni arkaplan oluştur.
          </button>

          <button
            onClick={() => {
              navigator.clipboard.writeText(hex);
              tost();
            }}
            className="btn btn-dark w-25 mx-3 btn-lg shadow-lg">
            hex değerini kopyala
          </button>
        </div>
      </div>
    </div>
  );
}
// npm i react-toastify ile toast modülünü indirdim
export default App;
