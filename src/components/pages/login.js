import react,{Component} from "react";
import { Form,FormGroup,Label,Input,Button } from "reactstrap";


export default class Login extends Component{
	render(){
		return(
			<Form>
				<h1>Login</h1>
				<FormGroup>
					<Label for="email">Email</Label>
					<Input type="text" id="email" placeholder="Digite aqui seu email"/>
				</FormGroup>
				<FormGroup>
					<Label for="senha" >Senha</Label>
					<Input type="password" id="senha" placeholder="Digite aqui sua senha"/>
				</FormGroup>
				<Button color="primary">Entrar</Button>
			</Form>
		);
	}
}