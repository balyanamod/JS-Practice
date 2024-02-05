const myImage = document.querySelector("img");
myImage.addEventListener("click", function(){
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/image3.jpg"){
        myImage.setAttribute("src", "images/image1.jpg");
    }else{
        myImage.setAttribute("src", "images/image3.jpg");
    }
})