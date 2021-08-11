console.log(document.getElementsByClassName("list-group-item-action"))
for (const element of document.getElementsByClassName("list-group-item")){
    element.addEventListener("click", setActiveClass);
}

function setActiveClass(e) {
    for (const element of document.getElementsByClassName("list-group-item"))
        element.classList.remove("active")
    e.target.classList.add("active");
}