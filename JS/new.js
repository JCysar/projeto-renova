
        
function createP() {
    const elementId = document.getElementById("new-text");
    const text = elementId.textContent;
    let position;
    
    for (let index = elementId.textContent.length; index > 0 ; index--) {
        elementId.innerHTML = elementId.textContent.slice(0, index);
        
        if(elementId.offsetHeight <= document.getElementById("title-img-container").offsetHeight) {
            while (elementId.textContent[index] != " ") {
                
                index--
                position = index
                
            }
            break;
            
        }
        
    }
    
    let newP = text.slice(position,text.length);
    elementId.innerHTML = elementId.textContent.slice(0, position);
        
    let p = document.getElementById("new-text-extra");
    p.innerHTML = newP;
    p.style.display = "block";
}

if(document.getElementById("new-text").offsetHeight >= document.getElementById("title-img-container").offsetHeight && document.body.offsetWidth > 1000 && screen.width >= 1000){
    createP();
}





