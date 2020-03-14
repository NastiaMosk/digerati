//To the top button:
//  scr: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
mybutton = document.getElementById("to-top-btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//Menu class changer:
var headerNavLinks = document.querySelectorAll(".head-nav-link");

var addCurrentNavLink = function (navLink) {
  navLink.addEventListener('click', function () {
        var currentPage = document.querySelector(".currentPage");
        currentPage.classList.remove("currentPage");
        navLink.classList.add("currentPage");
        });
};

for (var i = 0; i < headerNavLinks.length;i++) {
    addCurrentNavLink(headerNavLinks[i]);
};

//input form 
var inputFields = document.querySelectorAll("input,textarea");
var addInputEffect = function (aField) {
    var inputLabel = aField.labels[0];
    aField.addEventListener('focus', function () {
        inputLabel.style.cssText = "font-size: calc(7px + .5vw); transform: translateY(calc(-1*(13px + .5vw))); color: #e9dfd6; transitionDuration: 0.2s;";

    });

    aField.addEventListener('focusout', function () {
        var inputContent = aField.value;
        if (inputContent == "") {
            inputLabel.style.cssText = "font-size: calc(13px + .5vw); transform: translateY(0); color: #fff; transitionDuration: 0.2s;";
        }
    });

};
for (var i = 0; i < inputFields.length; i++) {
    addInputEffect(inputFields[i]);
}

// cardCreator
////data-version
//var parent = document.querySelector(".menu-page");
//
//var menuItems = document.querySelectorAll(".menu-list-item");
//var addCardCreatorListener = function (menuItem) {
//    menuItem.addEventListener("click", function() {
//        var currentItem = document.querySelector(".currentItem");
//        currentItem.classList.remove("currentItem");
//        menuItem.classList.add("currentItem");
//        document.querySelector(".assortment").remove();
//        fetch('http://localhost:3000/' + menuItem.id).then(function(response) {
//        return response.json();
//        }).then(function(resp_json) {
//            cardCreator(resp_json);
//        })
//    })
//};
//for (var i = 0; i < menuItems.length;i++) {
//    addCardCreatorListener(menuItems[i]);
//};
//
//function cardCreator (array) {
//    var taskTemp, menuItemTemp, menuHeadTemp, menuDescrptionTemp, menuPriceTemp, menuItem, menuHead, menuDescription, menuPrice;
//
//    taskTemp = document.getElementById('menu-item-template').content;
//
//    var newPlace = document.createElement('div');
//    newPlace.classList.add('assortment');
//    parent.appendChild(newPlace);
//
//    for (var i = 0; i< array.length; i++) {
//        menuItemTemp = taskTemp.querySelector('.menu-item');
//        menuItem = document.importNode(menuItemTemp,true);
//
//        menuHeadTemp = menuItem.querySelector("h1");
//        menuDescrptionTemp = menuItem.querySelector("p");
//        menuPriceTemp = menuItem.querySelector("span");
//
//        menuHeadTemp.textContent = array[i].name;
//
//        menuDescrptionTemp.textContent = array[i].description;
//
//        menuPriceTemp.textContent = array[i].price;
//
//        newPlace.appendChild(menuItem);
//    }
//}

//local-static-version

var drinks = [
{"id":"2","name":"Tea.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"39", "src":"/img/menus/tea.jpg"},
{"id":"3","name":"Juice.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"59", "src":"/img/menus/juice.jpg"},
{"id":"1","name":"Coffee.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui,","price":"85","src":"/img/menus/coffee.jpg"},
{"id":"4","name":"Fruit Fresh.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"74","src":"/img/menus/fresh.jpg"},
{"id":"5","name":"Water.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"44","src":"/img/menus/water.jpg"},
{"id":"6","name":"Milkshake.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"97","src":"/img/menus/milkshake.jpg"}
];
var breads = [
{"id":"1","name":"Artisan.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"54","src":"/img/menus/artisan.jpg"},
{"id":"2","name":"Baguette.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"34","src":"/img/menus/baguette.jpg"},
{"id":"3","name":"Bagel.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"65","src":"/img/menus/bagel.jpg"},
{"id":"4","name":"Ukrainian.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"87","src":"/img/menus/ukrainian.jpg"}
];
var sanwiches = [
{"id":"1","name":"Cesar.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"35","src":"/img/menus/cesar.jpg"},
{"id":"2","name":"Swiss.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"56","src":"/img/menus/swiss.jpg"},
{"id":"3","name":"Italian.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"23","src":"/img/menus/tea.jpg","src":"/img/menus/italian.jpg"},
{"id":"4","name":"Veggie.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"15","src":"/img/menus/veggie.jpg"},
{"id":"5","name":"English breakfast.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"33","src":"/img/menus/english.jpg"}
];
var cakes = [
{"id":"1","name":"Tiramisy.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"67","src":"/img/menus/tiramisu.jpg"},
{"id":"2","name":"Cheesecake.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"48","src":"/img/menus/cheseecake.jpg"},
{"id":"3","name":"Black Forest.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"75","src":"/img/menus/blackforest.jpg"},
{"id":"4","name":"Napoleon.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"80","src":"/img/menus/napoleon.jpg"},
{"id":"5","name":"Mozart.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"68","src":"/img/menus/mozart.jpg"}
];
var piestarts = [
{"id":"1","name":"American Apple Pie.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"55","src":"/img/menus/applepie.jpg"},
{"id":"2","name":"Classic French Tart.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"73","src":"/img/menus/frenchtart.jpg"},
{"id":"3","name":"Pumpkin Pie.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"48","src":"/img/menus/pumpkin.jpg"},
{"id":"4","name":"Key Lime Pie.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"25","src":"/img/menus/keylime.jpg"},
{"id":"5","name":"Nut Tart.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"53","src":"/img/menus/nuttart.jpg"}
];
var desserts = [
{"id":"1","name":"Croissant.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"55","src":"/img/menus/croissant.jpg"},
{"id":"2","name":"Eclair.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"73","src":"/img/menus/eclairs.jpg"},
{"id":"3","name":"Lemon cupcake.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"48","src":"/img/menus/lemoncupcake.jpg"},
{"id":"4","name":"Creme Brulee.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"25","src":"/img/menus/cremebrulee.jpg"},
{"id":"5","name":"Ice Cream.","description":"Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui","price":"53","src":"/img/menus/icecream.jpg"}
];


var parent = document.querySelector(".menu-page");

var menuItems = document.querySelectorAll(".menu-list-item");
var addCardCreatorListener = function (menuItem) {
    menuItem.addEventListener("click", function() {
        var currentItem = document.querySelector(".currentItem");
        currentItem.classList.remove("currentItem");
        menuItem.classList.add("currentItem");
        document.querySelector(".assortment").remove();
        var theArray = eval(menuItem.id);
        cardCreator(theArray);
    })
};
for (var i = 0; i < menuItems.length;i++) {
    addCardCreatorListener(menuItems[i]);
};

function cardCreator (array) {
    var taskTemp, menuItemTemp, menuHeadTemp, menuDescrptionTemp, menuPriceTemp, menuImgTemp;
    
    taskTemp = document.getElementById('menu-item-template').content;

    var newPlace = document.createElement('div');
    newPlace.classList.add('assortment');
    parent.appendChild(newPlace);

    for (var i = 0; i< array.length; i++) {
        menuItemTemp = taskTemp.querySelector('.menu-item');
        menuItem = document.importNode(menuItemTemp,true);

        menuHeadTemp = menuItem.querySelector("h1");
        menuDescrptionTemp = menuItem.querySelector("p");
        menuPriceTemp = menuItem.querySelector("span");
        menuImgTemp = menuItem.querySelector("img");

        menuHeadTemp.textContent = array[i].name;

        menuDescrptionTemp.textContent = array[i].description;

        menuPriceTemp.textContent = array[i].price;
        
        menuImgTemp.src = array[i].src;
     
        newPlace.appendChild(menuItem);
    }
}

// quotesSlider

//data-version
//var counter = 0;
//
//var quoteArray = fetch('http://localhost:3000/quotes')
//  .then(response => response.json())
//  .then((json) => {
//    setInterval(function() {
//        document.querySelector("#quotText").innerHTML = json[counter].text;
//        document.querySelector("#quotAuthor").innerHTML = json[counter].author;
//            if (counter == json.length-1)
//                counter = 0;
//            else
//                counter++;
//        }, document.querySelector("#quotText").innerHTML.length * 80);
//  });

//static-ver

var counter = 0;

var quoteArray = [
{"id":"1","text":"“Chefs don’t make mistakes, they invent new dishes.”","author":"Elizabeth Briggs"},
{"id":"2","text":"An apron is a just cape on backwards","author":""},
{"id":"3","text":"“A recipe is a story that ends with a good meal.”","author":"Pat Conroy"},
{"id":"4","text":"“People who love to eat are the best people.”","author":"Julia Child"},
{"id":"5","text":"One day… I’m going to make the onions cry","author":""},
{"id":"6","text":"Bless the Food Before Us the Family Beside Us and the Love Between Us","author":"Amen"},
{"id":"7","text":"I’m on a seafood diet.  I see food, I eat it","author":""},
{"id":"8","text":"“In France, cooking is a serious art form and a national sport.”","author":"Julia Child"},
{"id":"9","text":"If you want to impress me with your car, it better be a food truck","author":""},
{"id":"10","text":"“You don’t need a silver fork to eat good food.”","author":"Paul Prudhomme"},
{"id":"11","text":"Stressed spelled backwards is desserts","author":""},
{"id":"12","text":"“All you need is love. But a little chocolate now and then doesn’t hurt.”","author":"Charles M. Shulz"},
{"id":"13","text":"“Vegetables are a must on a diet. I suggest carrot cake, zucchini bread and pumpkin pie.”","author":"Jim Davis"}
];

setInterval(function() {
        document.querySelector("#quotText").innerHTML = quoteArray[counter].text;
        document.querySelector("#quotAuthor").innerHTML = quoteArray[counter].author;
            if (counter == quoteArray.length-1)
                counter = 0;
            else
                counter++;
        }, document.querySelector("#quotText").innerHTML.length * 80);

// Form to data-server-json
//
//var contactForm = document.getElementById('contactForm');
//
//contactForm.addEventListener('submit',function (evt) {
//    evt.preventDefault();
//
//    var formData = {
//        'name': contactForm.querySelector("#name").value,
//        'description': contactForm.querySelector("#email").value,
//        'price': contactForm.querySelector("#message").value
//    };
//
//    fetch('//localhost:3000/breads', {
//        method:'post',
//        headers: {'Content-Type': 'application/json'},
//        body: JSON.stringify(formData)
//    });
//    contactForm.reset();
//});


//session-storage set
//var message = document.getElementById('message');
//if (!sessionStorage.getItem('message')) {
//    populateStorage();
//} else {
//    setStorage();
//}
//function populateStorage() {
//  sessionStorage.setItem('message', message.value);
//  setStyles();
//}
//
//function setStyles() {
//  var currentMessage = sessionStorage.getItem('message');
//  message.value = currentMessage;
//}
//
//message.onchange = populateStorage;
