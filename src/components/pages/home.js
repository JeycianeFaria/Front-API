import react, { Component } from "react";
import { Container,Navbar} from "reactstrap";
import "../../styles/home.css"
import Main from "../main";

export default  class Home extends Component{
    state = {
        postagens:[],
    }

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


    render(){
        return(
            <Container className="container">
                   <Navbar className="nav" >Nav</Navbar>
                   <div className="main">
                        <h1>Principal</h1>
                        <Main postagens = {this.state.postagens}></Main>
                   </div>
            </Container>
        );
    };
} 