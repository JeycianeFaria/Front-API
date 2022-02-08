import react, { Component } from "react";
import { Button } from "reactstrap";
import "../styles/postagem.css";

export default class Main extends Component {
  render() {
    const { postagens } = this.props;
    return (
      <tbody>
        {postagens.map((postagem) => (
          <div className="Postagem">
            {/* titulo, descricao, link,likes, tipo, tema, areaAtuacao, autorPostagem */}
            <h1>{postagem.titulo}</h1>
            <p>{postagem.descricao}</p>
            <a href="{postagem.link}">Clique aqui</a>
            <button>{postagem.tipo}</button>
            <button>{postagem.tema}</button>
            <button>{postagem.areaAtuacao}</button>
            <span>autor postagem</span>
          </div>
        ))}
      </tbody>
    );
  }
}
