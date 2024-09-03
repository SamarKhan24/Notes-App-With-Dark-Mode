const notesContainer = document.querySelector(".notes-container");
const Createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll("input-box");


function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updatestorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}




Createbtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updatestorage(); 
    }  
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updatestorage();
            }
        })
    }
    else if(e.target.input-Box.innerText === ""){
        e.target.parentElement.remove();
    }
})


notesContainer.addEventListener("keydown",e =>{

    if(
        e.key.toLowerCase() === "a" 
        && e.ctrlKey
    ){
        inputBox.setAttribute("contenteditable","true");
        img.src = "delete.png";
    }
});


var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "sun.png";
    }else{
        icon.src = "moon.png";
        
    }
}

 