import react, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import "../../styles/formulario.css";

export default class CadastroUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.state ? this.state.message : "",
    };
  }

  save = () => {
    const url = "https://zup-link.herokuapp.com/usuario";
    let data = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
    };
    const requestInfo = {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };
    fetch(url, requestInfo)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        if(response.status === 422 ){
          throw new Error("Você deve utilizar o email coorporativo.")
        }
        throw new Error("Cadastro não realizado!");
      })
      .then((response)=>{
        if(response.ok){
          this.props.history.push('/')
        }
      })
      .catch((e) => {
        this.setState({ message: e.message });
        document.getElementById("myForm").reset();
      });
  };

  render() {
    return (
      <div className="Formulario">
        <Form id="myForm">
          {this.state.message !== "" ? (
            <Alert color="danger" className="text-center">
              {this.state.message}
            </Alert>
          ) : (
            ""
          )}

          <h1>Cadastro Usuario</h1>
          <FormGroup>
            <Label for="nome">Nome</Label>
            <Input
              type="text"
              id="nome"
              placeholder="Digite aqui seu nome"
              onChange={(e) => (this.nome = e.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="text"
              id="email"
              placeholder="Digite aqui seu email"
              onChange={(e) => (this.email = e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="senha">Senha</Label>
            <Input
              type="password"
              id="senha"
              placeholder="Digite aqui sua senha"
              onChange={(e) => (this.senha = e.target.value)}
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
