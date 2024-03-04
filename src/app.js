/* eslint-disable */
import "bootstrap";
import "./style.css";

//Estos son los Arrays con los elementos que iran anidados.
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domi = [".com", ".es", ".io", ".net"];

window.onload = function() {
  let domainList = document.getElementById("domainList"); //Aquí enlazamosla lista en el id del html

  for (let k = 0; k < pronoun.length; k++) {
    for (let j = 0; j < adj.length; j++) {
      for (let i = 0; i < noun.length; i++) {
        for (let m = 0; m < domi.length; m++) {
          let domain = pronoun[k] + adj[j] + noun[i] + domi[m]; //construye todas las posibilidades de dominios con las palabras que hay en todos los arrays
          let listItem = document.createElement("li"); // Crear un nuevo elemento de lista <li> y establecer su contenido como el dominio
          listItem.textContent = domain;
          domainList.appendChild(listItem); // Agregar el elemento de lista a la lista en el HTML. .appendChild es un método que agrega un nuevo elemento como hijo de otro elemento.
        }
      }
    }
  }
};
