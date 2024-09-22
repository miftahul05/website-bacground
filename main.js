const circles = document.querySelectorAll(".circle"); 
circles. forEach(circle => { 
circle.addEventListener("click", ({target}) => { 
const {backgroundColor} = getComputedStyle(target);
document.body.style.backgroundColor = backgroundColor;
})
})