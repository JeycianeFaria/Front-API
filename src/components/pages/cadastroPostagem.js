import react, { Component } from "react";
import { Form, FormGroup, Label, Input, Button,Alert } from "reactstrap";
import "../../styles/formulario.css";

export default class CadastroPostagem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.state ? this.state.message : "",
    };
  }

  save = () => {
    const url = "http://localhost:8080/postagem";
    let data = {
      titulo: this.titulo,
      descricao: this.descricao,
      link: this.link,
      tipo: this.tipo,
      tema: this.tema,
      areaAtuacao: this.areaAtuacao,
    };
    let token = localStorage.getItem("token");

    const requestInfo = {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token,
      }),
    };

    fetch(url, requestInfo)
      .then((response) => {
        if (response.create) {
          console.log("Cadastro efetuado com sucesso!");
          return response;
        }
        throw new Error("Cadastro não realizado!")
      })
      .catch((e) => {
        this.setState({ message: e.message });
        document.getElementById("myForm").reset();
      });
  };

  render() {
    return (
      <div className="Formulario">
        <Form>
          {this.state.message !== "" ? (
            <Alert color="danger" className="text-center">
              {this.state.message}
            </Alert>
          ) : (
            ""
          )}

          <h1>Cadastro Postagem</h1>
          <FormGroup>
            <Label for="titulo">Titulo</Label>
            <Input
              type="text"
              id="titulo"
              placeholder="Digite aqui o Titulo"
              onChange={(e) => (this.titulo = e.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="descricao">Descrição</Label>
            <textarea
              id="descricao"
              onChange={(e) => (this.descricao = e.target.value)}
              placeholder="Adicione aqui um descriçao:  "
              className="form-control"
            ></textarea>
          </FormGroup>
          <FormGroup>
            <Label for="link">Link</Label>
            <Input
              type="link"
              id="link"
              placeholder="Digite aqui o link"
              onChange={(e) => (this.link = e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="tipo">Tipo</Label>
            <Input
              type="text"
              id="tipo"
              placeholder="Ex: DOCUMENTACAO, VIDEO, ARTIGO"
              onChange={(e) => (this.tipo = e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="tema">Tema</Label>
            <Input
              type="text"
              id="tema"
              placeholder="Ex: JAVA, SPRING_BOOT, REACT"
              onChange={(e) => (this.tema = e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="areaAtuacao">Area de Atuação</Label>
            <Input
              type="text"
              id="areaAtuacao"
              placeholder="Ex: BACKEND, FRONTEND"
              onChange={(e) => (this.areaAtuacao = e.target.value)}
            />
          </FormGroup>
          <Button className="Button"  block onClick={this.save}>
            Cadastrar
          </Button>
        </Form>
      </div>
    );
  }
}
