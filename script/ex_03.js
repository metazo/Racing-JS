const message = () => {
  let nom = "";
  while (nom == "" || nom == null) {
    nom = prompt("Quel est votre nom ?");
  }

  if (confirm("Êtes vous sur que " + `${nom} ` + "est votre nom  ?")) {
    alert("Bonjour " + `${nom} !`);
    document.querySelector("footer div").innerHTML = "Bonjour " + `${nom} !`;
  }
};

document.querySelector("footer div").addEventListener("click", message);
