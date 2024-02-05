const myImage = document.querySelector("img");
myImage.addEventListener("click", function(){
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/image3.jpg"){
        myImage.setAttribute("src", "images/image1.jpg");
    }else{
        myImage.setAttribute("src", "images/image3.jpg");
    }
})

let mybtn = document.querySelector("button");
let myH1 = document.querySelector("h1");

function setUserName(){
    const myName = prompt("Please Enter your Name:");
    if(!myName){
        setUserName();
    }else{
    localStorage.setItem("name", myName);
    myH1.textContent = `Mozilla is cool, ${myName}`;}
}
if(!localStorage.getItem("name")){
    setUserName();
}else{
    const storedName = localStorage.getItem("name");
    myH1.textContent = `Mozilla is Cool, ${storedName}`;
}
mybtn.addEventListener("click", function(){setUserName();});