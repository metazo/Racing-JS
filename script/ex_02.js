let clickTime = 0;

const compteur = () => {
  clickTime++;
  console.log("nombre de click :", clickTime);
  document.querySelector("footer div").innerHTML = clickTime;
};

document.querySelector("footer div").addEventListener("click", compteur);

compteur();
