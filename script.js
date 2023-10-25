const content=document.querySelector(".content")
for(let i=0;i<64;i++){
    //template literal ALtGr+7 - ${változo}
    content.innerHTML=`<div class="box" id="${i+1}"></div>`;
}
//NodeList-ént megkapjuk a .box-okat:
const boxes=document.querySelectorAll(".box");
boxes.forEach(element=>{
    element.addEventListener("click", (event) =>{
        event.target.style.backgroundColor="#ff0000";
    })
})