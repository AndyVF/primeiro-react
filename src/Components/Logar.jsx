import React from "react"
import "../Components/logar.css"

export default function logar () {
    return (
        <>
        <div className= "container">
          <div className= "box">
              <input type="text" id="lgn" placeholder="Usuário" name="usuario" />
              <input type="password" id="psw" placeholder="Senha" name="senha" />
              <button>LOGIN</button>
              <a href="asdas">Esqueceu a senha ? Clique aqui</a>
          </div>
        </div>
        </>
    )
}