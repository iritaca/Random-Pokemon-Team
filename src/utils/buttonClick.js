const $createButton = document.getElementById("button");
const $contentUp = document.getElementById("contentUp");
const $contentDown = document.getElementById("contentDown");

$createButton.addEventListener("click",()=>{
    $contentUp.classList.toggle("up");
    $contentDown.classList.toggle("down");
})

