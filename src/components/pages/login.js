import react, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import "../../styles/formulario.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.state ? this.props.state.message : "",
    };
  }

  signIn = () => {
    const url = "http://localhost:8080/login";
    const data = {
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
          return response.headers.get("Authorization");
        }
        throw new Error("Login inválido");
      })
      .then((token) => {
        localStorage.setItem("token", token);
        this.props.history.push("/");
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
          {this.state.message !== "" ? <Alert color="danger" className="text-center">{this.state.message}</Alert> : ""}

          <h1>Login</h1>
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
          <Button className="Button"  block onClick={this.signIn}>
            Entrar
          </Button>
        </Form>
      </div>
    );
  }
}
