const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/snow1.png") {
    myImage.setAttribute("src", "images/snow2.png");
  } else if (mySrc === "images/snow2.png") {
    myImage.setAttribute("src", "images/ash.png");
  } else if (mySrc === "images/ash.png") {
    myImage.setAttribute("src", "images/pete.png");
  } else if (mySrc === "images/pete.png") {
    myImage.setAttribute("src", "images/evee.png");
  } else if (mySrc === "images/evee.png") {
    myImage.setAttribute("src", "images/tom.png");
  } else {
    myImage.setAttribute("src", "images/snow1.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function likeCats() {
    const yesOrNo = prompt("Do you like cats? [y/n]:");
    if (yesOrNo == "n") {
        likeCats();
    } else {
        alert("You're cool.");
    }
}

function setUserName() {
    const myName = prompt("Please enter your name too:");
    if (!myName) {
      myHeading.textContent = "Hey man, aren't cats cool?";
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Hey ${myName}, aren't cats cool?`;
    }
}
  
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hey ${storedName}, aren't cats cool?`;
}

myButton.onclick = () => {
    setUserName();
};
  