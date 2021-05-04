let Hot = document.querySelector("#HotName");
let Ice = document.querySelector("#IceName");
let table = document.getElementsByTagName("table")[0];
let button1 = document.querySelector("#insert");
let tbody = document.getElementsByTagName("tbody")[1];
 let coffee = 3;

button1.addEventListener("click", () => {
    if(Hot.value.length > 0 &&
         Ice.value.length > 0
        ){
            addCoffee();
    }
})

function addCoffee(){
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let button1 = document.createElement("button");
   
    th.innerText = ++ coffee;
    th.setAttribute("scope", "row")
    button1.innerText = "X";
    button1.classList.add("btn");
    button1.classList.add("btn-danger");
    button1.addEventListener("click", ()=>{
    button1.parentNode.parentNode.remove()
    });
    td3.appendChild(button1);

    td1.innerText = Hot.value;
    td2.innerText = Ice.value;

    Hot.value = "";
    Ice.value = "";

    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);

}