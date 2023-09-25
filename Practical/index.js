var usertext=document.getElementById("textuser");
var btnclick=document.getElementById("btn");
btnclick.addEventListener('click',()=>{
    let Button=document.createElement("button");
    let list=document.createElement("li");
    let Ul=document.getElementById("Ulist");
    list.textContent=usertext.value;
    Ul.appendChild(list);
    Button.textContent="Delete";
    list.appendChild(Button);
    usertext.value="";  
})
