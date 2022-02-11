import React, {useState, useEffect } from "react";
import {ReactComponent as Red} from "../images/heartRed.svg"
import {ReactComponent as Black} from "../images/heartBlack.svg"
import { useHistory } from "react-router-dom";
import "../styles/postagem.css";

function Main(props) {
  
  const history = useHistory();
  const [postagens, setPostagens] = useState(props.postagens);

  const onLike = (id) => {
    const url = "https://zup-link.herokuapp.com/postagem";
    const token = localStorage.getItem("token");

    const requestInfo = {
      method: "PATCH",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token,
      }),
    };
    fetch(`${url}/${id}`, requestInfo)
      .then((response) => {
        if(response.ok){
          return response
        }else{
          throw new Error("Something went wrong")
        }
      })
      .catch(
        (e) => {
        debugger
        history.push('/login')
      });
  };
  
  useEffect(() => {
    
    const url = "https://zup-link.herokuapp.com/postagem";
    const requestInfo = {
      method: "GET",
      headers: new Headers({
        "Content-type": "application/json",
      }),
    };

    fetch(url, requestInfo)
      .then((respone) => respone.json())
      .then((postagens) => setPostagens({ postagens }))
      .catch((e) => console.log(e));

  }, [postagens]);

  let ANIMATEDCLASSNAME = "animated";
  let ELEMENTS = document.querySelectorAll(".HOVER");
  let ELEMENTS_SPAN = [];

  ELEMENTS.forEach((element, index) => {
    let addAnimation = false;
    // Elements that contain the "FLASH" class, add a listener to remove
    // animation-class when the animation ends
    if (element.classList[1] == "FLASH") {
      element.addEventListener("animationend", (e) => {
        element.classList.remove(ANIMATEDCLASSNAME);
      });
      addAnimation = true;
    }

    // If The span element for this element does not exist in the array, add it.
    if (!ELEMENTS_SPAN[index])
      ELEMENTS_SPAN[index] = element.querySelector("span");

    element.addEventListener("mouseover", (e) => {
      ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
      ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";

      // Add an animation-class to animate via CSS.
      if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
    });

    element.addEventListener("mouseout", (e) => {
      ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
      ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
    });
  });

  return (
    <tbody>
      
      {postagens ?
       postagens?.postagens?.map((postagem) => (
        <div className="postagem" key={postagem.id}>
          <div className="header-post">
            <h1>{"#" + postagem.id + " " + postagem.titulo}</h1>
            <div className="like">
              { postagem.likes > 0 ?
                <Red/>:
               <Black/>
              }
              <input
                id="input"
                type="button"
                onClick={() => {onLike(postagem.id)}}
              />
              <div>{postagem.likes}</div>
            </div>
          </div>
          <div>
            <button className="tag-tipo">{postagem.tipo}</button>
            <button className="tag-tema">{postagem.tema}</button>
            <button className="tag-area">{postagem.areaAtuacao}</button>
          </div>
          <p className="description">{postagem.descricao}</p>
          <h6 className="autor">Compartilhado por: {postagem.autorPostagem.nome}</h6>
          <div className="display">
            {/^https?:\/\//.test(`${postagem.link}`) ? (
              <a className="url" href={`${postagem.link}`} target="_blank">
                <span></span>
                <text>Acesse o link </text>
              </a>
            ) : null}
          </div>
        </div>
      )):null}
      
    </tbody>
  );
}

export default Main;
