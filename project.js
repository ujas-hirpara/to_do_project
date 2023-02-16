
class data {
    constructor(title, discription, state, startdate, enddate) {
        this.title = title;
        this.discription = discription;
        this.state = state;
        this.startdate = startdate;
        this.enddate = enddate
    }
}
let invalid = document.getElementById("invalid")
invalid.style.display = "none";

let dropdowninvalid = document.getElementById("dropdowninvalid")

dropdowninvalid.style.display = "none"


let sdateinvalid = document.getElementById("sdateinvalid")
sdateinvalid.style.display = "none"

let edateinvalid = document.getElementById("edateinvalid")
edateinvalid.style.display = "none"


let submit = document.getElementById("submit");
submit.addEventListener("click", formsubmit)

function formsubmit(e) {
    let title = document.getElementById("formInput").value;
    let discription = document.getElementById("example").value;
    let startdate = document.getElementById("startdate").value;
    let enddate = document.getElementById("enddate").value;
    let inputstate = document.getElementById("inputstate")
    let inputstate1 = document.getElementById("inputstate1")
    let inputstate2 = document.getElementById("inputstate2")


    let state;
    if (inputstate.selected) {
        state = "inprogress"
    }
    else if (inputstate1.selected) {
        state = "to do"
    }
    else if (inputstate2.selected) {
        state = "completed"
    };


    let list = localStorage.getItem("list");

    let myobj = [];
    if (list) {
        myobj = JSON.parse(list);
    }

    if (title && enddate && startdate && state && enddate > startdate) {
        let bigdata = new data(title, discription, state, startdate, enddate)
        myobj.push(bigdata)
        if (sessionStorage.getItem("list")) {
            alert("data updated successfully");
        }
        else {
            alert("data successfully added")
        }
        location.assign("/todolist.html")
    }
    
    else if(enddate < startdate){
        alert("please enter a valid date")
    }

    if (title) {

    }
    else{
        invalid.style.display = "block";
        setTimeout(() => {

            invalid.style.display = "none"
        },2000)
    }
    


    if (state) {
    }
    else{
        dropdowninvalid.style.display = "block";
        setTimeout(() => {

            dropdowninvalid.style.display = "none"
        },2000)
    }


    if (startdate){
    }
    else{
        sdateinvalid.style.display = "block";
        setTimeout(() => {

            sdateinvalid.style.display = "none"
        },2000)
    }


    if (enddate) {

    }
    else{
        edateinvalid.style.display = "block";
        setTimeout(() => {

            edateinvalid.style.display = "none"
        },2000)
    }

    


    localStorage.setItem("list", JSON.stringify(myobj));
    e.preventDefault();
    sessionStorage.clear()
   
}


document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("formInput").value = ""
    document.getElementById("example").innerHTML = ""
    document.getElementById("startdate").value = ""
    document.getElementById("enddate").value = ""

});


if (sessionStorage.getItem("list")) {
    let getlist = sessionStorage.getItem("list");

    document.getElementById("submit").innerHTML = "update"

    let getobj = [];
    if (getlist) {
        getobj = JSON.parse(getlist);
    }

    console.log(getobj[getobj.length - 1])

    document.getElementById("formInput").value = getobj[getobj.length - 1].title;
    document.getElementById("example").innerHTML = getobj[getobj.length - 1].discription;
    document.getElementById("startdate").value = getobj[getobj.length - 1].startdate;
    document.getElementById("enddate").value = getobj[getobj.length - 1].enddate;


    if (getobj[getobj.length - 1].state == "inprogress") {
        document.getElementById("inputstate").selected = true
    }
    else if (getobj[getobj.length - 1].state == "to do") {
        document.getElementById("inputstate1").selected = true
    }
    else if (getobj[getobj.length - 1].state == "completed") {
        document.getElementById("inputstate2").selected = true
    }

}





