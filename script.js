const content = document.querySelector(".content");
for(let i = 0; i < 64; i++){
    //Template literal Altgr+7 - ${változó}
    content.innerHTML += `<div class="box" id="${i+1}"></div>`;
}
//NodeList-ként megkapjuk a .box-okat:
const boxes = document.querySelectorAll(".box");
//Végig megyünk az egyes div-eken, és rájuk akasztunk egy-egy eseményfigyelőt:

boxes.forEach(element => {
    //Az eseményfigyelő a click eseményre indul be:
    
    element.addEventListener("click", (event) => {
        //console.log(event.target);
        let currentElement=event.target;
        if(currentElement.style.backgroundColor===""){
            currentElement.style.backgroundColor="#ff0000";
            currentElement.textContent = currentElement.id;
        }
        else{
            currentElement.style.backgroundColor="";
            currentElement.textContent ="";//null
        }

        //currentElement.style.backgroundColor = "#ff0000";
        currentElement.style.textAlign = "center";
        //currentElement.textContent = currentElement.id;
    })

});

/*(hasznalhatatlan)
boxes.forEach(szinez(element));
function szinez(element){
    element.addEventListener("click", (event)=>{
        event.target.style.backgroundColor="#ff0000";
    })
}
*/