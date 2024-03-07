/* eslint-disable */
import "bootstrap";
import "./style.css";

//Estos son los Arrays con los elementos que iran anidados.
let pronoun = ["the", "our"];
let adjetive = ["great", "big"];
let noun = ["jogger", "racoon"];
let domainExtension = [".com", ".es", ".io", ".net"];
//////-----------------------------Código simplicado con forEach----------------------------
window.onload = function() {
  let domainList = document.getElementById("domainList"); //Aquí enlazamosla lista en el id del html
  pronoun.forEach(pronounItem => {
    adjetive.forEach(adjetiveItem => {
      noun.forEach(nounItem => {
        domainExtension.forEach(domainExtensionItem => {
          let completeDomainMade =
            pronounItem + adjetiveItem + nounItem + domainExtensionItem;
          let listItem = document.createElement("li");
          listItem.textContent = completeDomainMade;
          domainList.appendChild(listItem);
        });
      });
    });
  });
};

  ///////---------------------Código antiguo-----------------------------------------
  // for (let k = 0; k < pronoun.length; k++) {
  //   for (let j = 0; j < adjetive.length; j++) {
  //     for (let i = 0; i < noun.length; i++) {
  //       for (let m = 0; m < domainExtension.length; m++) {
  //         let completeDomainMade =
  //           pronoun[k] + adjetive[j] + noun[i] + domainExtension[m]; //construye todas las posibilidades de domnios con las palabras que hay en todos los arrays
  //         let listItem = document.createElement("li"); // Crear un nuevo elemento de lista <li> y establecer su contenido como el domnio
  //         listItem.textContent = completeDomainMade;
  //         domainList.appendChild(listItem); // Agregar el elemento de lista a la lista en el HTML. .appendChild es un método que agrega un nuevo elemento como hijo de otro elemento.
  //       }
  //     }
  //   }
  // }

