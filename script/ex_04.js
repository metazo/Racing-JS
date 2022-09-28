let str = "";

const keyboard = (e) => {
    str = str + e.key;
    console.log(str);
    document.querySelector("footer div").innerHTML = str.slice(-42);
}

document.addEventListener("keydown", keyboard);