const todoEl = document.getElementById("todo-el")
const saveBtn = document.getElementById("save-el")
const resetBtn = document.getElementById("reset-el")
const listEl = document.getElementById("list-el")

let listItem = []

let output = ""

function init() {
    listEl.innerHTML = ""
    if (localStorage.itemList) {
      
      renderList()
    }
  }

saveBtn.addEventListener("click", () => {

    let listObj = {
        item: todoEl.value
    }
    listItem.push(listObj)

    localStorage.setItem("itemList", JSON.stringify(listItem))

    init()
    todoEl.value = ""
})

function renderList() {

    listItem = JSON.parse(localStorage.getItem("itemList"))
    output="";
    listItem.forEach((item, index) => {
        output += `
        
        
        <li class="list-group-item" id="li-el"><i id="icon" class="fa fa-check-square" style="font-size:20px;"></i>${item.item}<button class="btn btn-danger" id="delete-btn" onclick="onDelete(${index})">X</button> <button class="btn btn-success">Done</button> </li> 
       
    `

        listEl.innerHTML = output
    });



}



resetBtn.addEventListener("click", () => {
    todoEl.value = ""
})

function onDelete(index) {
    
    console.log(listItem)
    listItem.splice(index, 1)
    localStorage.setItem("itemList", JSON.stringify(listItem))
    init()
}


init()