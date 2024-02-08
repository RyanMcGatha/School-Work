function boxA(x) {
    return document.getElementsByClassName("boxA");
}

function boxB(x) {
    return document.getElementsByClassName("boxB");
}

function boxC(x) {
    return document.getElementsByClassName("boxC");
}
const button = document.querySelector(".but");

function math1(x) {
    return (boxA ** 2 + boxC ** 2);
}
button.addEventListener("click", ()=>{
    math1()
} )


