import $ from "jquery";
import "bootstrap"; //breathecode dom for more explicit errors
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  document.querySelector("#the-domain").innerHTML = domainNameGenerator();
  console.log("Hello Rigo from the console!");
};

let domainNameGenerator = () => {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger.com", "racoon.com"];

  var proIndx = Math.floor(Math.random() * pronoun.length);
  var adjIndx = Math.floor(Math.random() * adj.length);
  var nounIndx = Math.floor(Math.random() * noun.length);

  return pronoun[proIndx] + adj[adjIndx] + noun[nounIndx];
};
