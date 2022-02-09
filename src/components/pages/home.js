import react, { Component } from "react";
import { Container, Navbar } from "reactstrap";
import "../../styles/home.css";
import Main from "../main";

export default class Home extends Component {
  state = {
    postagens: [],
  };

  componentDidMount() {
    const url = "http://localhost:8080/postagem";
    const requestInfo = {
      method: "GET",
      headers: new Headers({
        "Content-type": "application/json",
      }),
    };

    fetch(url, requestInfo)
      .then((respone) => respone.json())
      .then((postagens) => this.setState({ postagens }))
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <Container className="container">
         <nav className="nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/login">Entrar</a> 
            </li>
            <li className="nav-item">
              <a href="/cadastro-usuario">Cadastrar-se</a> 
            </li>
            <li className="nav-item">
              <a href="/cadastro-postagem">Cadastrar Postagem</a> 
            </li>
          </ul>
        </nav> 
        <div className="main">
          <h1 className="principal">Postagens</h1>
          <Main postagens={this.state.postagens}></Main>
        </div>
      </Container>
    );
  }
}
