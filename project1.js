showlist();

function showlist() {

    let list = localStorage.getItem("list");
    let myobj = [];
    if (list) {
        myobj = JSON.parse(list);
    }
    
    let tabletext = document.getElementById("tabletext");
    let html = "";
    myobj.forEach(function (element, index) {
        html += `<tr id="text">
                      <td>${index + 1}</td>
                      <td>${element.title}</td>
                      <td>${element.discription}</td>
                      <td>${element.state}</td>
                      <td>${element.startdate}</td>
                      <td>${element.enddate}</td>
                      <td><button name="btn" id=${index} onclick="deletes(this.id),box(this.id)" style = "width: 50px; height: 30px;">delete</button></td>
                      <td><button name="btn" id=${index} onclick="edit(this.id)" style = "width: 50px; height: 30px;">edit</button></td>
                  </tr>`
    });

    tabletext.innerHTML = html;
}


function deletes(index) {
    const datadeletex = confirm("Are you sure want to delete this data!!")
    
    if(datadeletex){
        let list = localStorage.getItem("list");
        let myobj = [];
        if (list) {
            myobj = JSON.parse(list);
        }

        myobj.splice(index, 1);
        localStorage.setItem("list", JSON.stringify(myobj));
        showlist();
    }
};


function edit(index) {
    let list = localStorage.getItem("list");
    let myobj = [];
    if (list) {
        myobj = JSON.parse(list);
    }

    let getlist = sessionStorage.getItem("list");

    let getobj = [];
    if (getlist) {
        getobj = JSON.parse(getlist);
    }
    
    getobj.push(myobj[index]);

    myobj.splice(index,1)
    localStorage.setItem("list", JSON.stringify(myobj));
    showlist();
    sessionStorage.setItem("list", JSON.stringify(getobj));
    location.assign("/todo.html")
}