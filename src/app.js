import react, { Component } from "react";
import {} from "reactstrap";
import CadastroPostagem from "./components/pages/cadastroPostagem";
//import CadastroUsuario from "./components/pages/cadastroUsuario";
//import Login from "./components/pages/login";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        {/* <CadastroUsuario/> */}
        <CadastroPostagem/>
      </div>
    );
  }
}
