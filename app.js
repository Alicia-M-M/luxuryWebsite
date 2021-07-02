document.getElementById("icon").addEventListener("click", navbarFunction);

function navbarFunction() {
  const item1 = document.getElementById("navBarCollapse");
  const item2 = document.getElementById("carouselWrapper");
  if (item1.className === "navbar") {
    item1.className += " responsive";
    item2.className += " responsive";
  } else {
    item1.className = "navbar";
    item2.className += "carouselContainer";
  }
}


document.getElementById("search").addEventListener("keyup", searchFunction);

function searchFunction() {
  var i;
  input = document.getElementById("search");
  console.log(input.value);
  filter = input.value.toLowerCase();
  console.log(filter);
  const match = document.querySelectorAll("." + filter);
  const showAllCards = document.querySelectorAll(".cards");
  console.log(match);
  if (filter != "cards") {
    for (i = 0; i < showAllCards.length; i++) {
      showAllCards[i].style.display = "none";
    }
    for (i = 0; i < match.length; i++) {
      match[i].style.display = "block";
    }
  } else {
    for (i = 0; i < showAllCards.length; i++) {
      showAllCards[i].style.display = "block";
    }
  }
}


document.getElementById("makeUp").onclick = function () {
  searchJewelery("makeup");
};

document.getElementById("jewelery").onclick = function () {
  searchJewelery("jewelery");
};

document.getElementById("all").onclick = function () {
  searchJewelery("cards");
};

searchJewelery("cards");
function searchJewelery(searchElement) {
  console.log(searchElement);
  var i;
  const showAll = document.querySelectorAll(".cards");
  console.log(showAll);
  const showClicked = document.querySelectorAll("." + searchElement);
  console.log(showClicked);

  if (searchElement != "cards") {
    for (i = 0; i < showAll.length; i++) {
      showAll[i].style.display = "none";
    }
    for (i = 0; i < showClicked.length; i++) {
      showClicked[i].style.display = "block";
    }
  } else {
    for (i = 0; i < showAll.length; i++) {
      showAll[i].style.display = "block";
    }
  }
}

const cardItem = document.querySelectorAll(".cards");
console.log(cardItem);


for (var i = 0; i < cardItem.length; i++) {
  const cardItemClicked = cardItem[i];
  console.log(cardItemClicked);
  cardItemClicked.addEventListener('click', changeHeart);
}


function changeHeart(event) {
  const heart = event.currentTarget.children[3];
  console.log(heart);
  const textHeader = event.currentTarget.children[1];
  console.log(textHeader);
  if (heart.style.color !== "red") {
    heart.style.color = "red";
    heart.classList = "fas fa-heart";
    const currentItemPush = textHeader.innerHTML;
    console.log(wishList.push(currentItemPush));
    console.log(wishList);
  } else if (heart.style.color !== "black") {
    heart.style.color = "black";
    heart.classList = "far fa-heart";
    const currentItemRemove = textHeader.innerHTML;
    console.log(currentItemRemove);
    const removeItem = wishList.indexOf(currentItemRemove);
    if (removeItem > -1) {
      wishList.splice(removeItem, 1);
    }
    console.log(wishList);
  }
  var text = "<ul>";
  wishList.forEach(myFunction);
  text += "</ul>";
  document.getElementById("wishListArray").innerHTML = text;
  function myFunction(value) {
    text += "<li>" + value + "</li>";
  }


  const heartCount = document.getElementById("heartTotal"); heartCount.innerHTML = wishList.length;
}

const wishList = [];


const modalDisplay = document.getElementById("modalContainer");

document.getElementById("openWishList").onclick = function () {
  modalDisplay.style.display = "block";
};

document.getElementsByClassName("closeModal")[0].onclick = function () {
  modalDisplay.style.display = "none";
};

var index = 0;
var myVar;
const buttonContainer = document.getElementById('buttonContainer');
const mySlides = document.getElementsByClassName('slideImageFinal');
const myButtons = document.getElementsByClassName('circleControl');

const buttonItem = document.querySelectorAll(".circleControl");
console.log(buttonItem);

for (var i = 0; i < buttonItem.length; i++) {
  const buttonItemClicked = buttonItem[i];
  console.log(buttonItemClicked);
  buttonItemClicked.addEventListener('click', clickedButton);
}

function clickedButton(event) {
  const currentButton = event.target.id;
  var i;
  for (i = 0; i < mySlides.length; i++) {
    mySlides[i].style.opacity = "0";
  }

  for (i = 0; i < myButtons.length; i++) {
    myButtons[i].style.opacity = "0.2";
  }
  mySlides[currentButton - 1].style.opacity = "1";
  myButtons[currentButton - 1].style.opacity = "0.5";
}

autoSlideShow();
function autoSlideShow() {
  var i;
  for (i = 0; i < mySlides.length; i++) {
    mySlides[i].style.opacity = "0";
  }

  for (i = 0; i < myButtons.length; i++) {
    myButtons[i].style.opacity = "0.2";
  }

  index++;
  console.log(index);

  if (index > mySlides.length) {
    index = 1;
  }
  console.log(myButtons[index - 1]);
  mySlides[index - 1].style.opacity = "1";
  myButtons[index - 1].style.opacity = "0.5";

  myVar = setTimeout(autoSlideShow, 4800);
}

buttonContainer.addEventListener("mouseenter", function (event) {
  clearTimeout(myVar);
});

buttonContainer.addEventListener("mouseleave", function (event) {
  autoSlideShow();
});



window.onscroll = function () { scrollSideBar() };

function scrollSideBar() {
  const topOfDiv = document.getElementById("offSetContainer");
  const finalDiv = topOfDiv.offsetTop;
  if (document.body.scrollTop > finalDiv || document.documentElement.scrollTop > finalDiv) {
    document.getElementById("sidebar").className = "stickySideBar";
    document.getElementById("offSetContainer").classList.add("productContainerScroll");
  } else {
    document.getElementById("sidebar").className = "";
    document.getElementById("offSetContainer").classList.remove("productContainerScroll");
  }
}
