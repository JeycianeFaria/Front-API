import react, {Component} from "react";
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'
import "../../styles/formulario.css"


export default class CadastroUsuario extends Component{
    render(){
        return(
            <div className="Formulario">
                <Form>
                    <h1>Cadastro Usuario</h1>
                    <FormGroup>
                        <Label for="nome">Nome</Label>
                        <Input type="text" id="nome" placeholder="Digite aqui seu nome"></Input>
                    </FormGroup>
                    <FormGroup>
						<Label for="email">Email</Label>
						<Input type="text" id="email" placeholder="Digite aqui seu email"/>
					</FormGroup>
					<FormGroup>
						<Label for="senha" >Senha</Label>
						<Input type="password" id="senha" placeholder="Digite aqui sua senha"/>
					</FormGroup>
                    <Button color="primary" block >Cadastrar</Button>
                </Form> 
            </div>
        );
    }
}
