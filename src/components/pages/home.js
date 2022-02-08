import react, { Component } from "react";
import { Container,Navbar} from "reactstrap";
import "../../styles/home.css"

export default  class Home extends Component{
    render(){
        return(
            <Container className="container">
                   <Navbar className="nav" >Nav</Navbar>
                   <div className="main">
                        <h1>Principal</h1>
                   </div>
            </Container>
        );
    };
} 