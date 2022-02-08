import PrivateRoute from "./auth";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from "./components/pages/login";
import CadastroPostagem from "./components/pages/cadastroPostagem";
import CadastroUsuario from "./components/pages/cadastroUsuario";
import Home from "./components/pages/home";

const Routes= () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/cadastro-usuario' component={CadastroUsuario}/>
            <PrivateRoute path='/cadastro-postagem' component={CadastroPostagem} />
        </Switch>
    </Router>
)

export default Routes;