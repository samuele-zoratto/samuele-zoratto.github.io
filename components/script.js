// JavaScript Document

function go_cats(){
    if(typeof(Storage) !== "undefined") {
        var myarray = ["cat1.jpg", "cat2.jpg"];
        sessionStorage.setItem("array", JSON.stringify(myarray));
    } else {
        alert("Sorry, your browser does not support web storage...");
    }
      var newwin = window.open("pics.html","_self");
}

function go_mice(){
    if(typeof(Storage) !== "undefined") {
        var myarray = ["mouse1.jpg", "mouse2.jpg"];
        sessionStorage.setItem("array", JSON.stringify(myarray));
    } else {
        alert("Sorry, your browser does not support web storage...");
    }
      var newwin = window.open("pics.html","_self");
}

function print_array(){
  console.log(sessionStorage.getItem("array"));
}

function clear_variables(){
    console.log("I clear stuff, maybe...");
    window.sessionStorage.clear();
    print_array();
}