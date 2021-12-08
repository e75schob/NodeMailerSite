

//Javascript for hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
//encodeURIComponent method look into if percentage symbol needs?

const uri = ':$';
const encoded = encodeURIComponent(uri);
let activeTipPercentage = 0
console.log(encoded);

try {
  console.log(decodeURI(encoded));
  // expected output: "https://mozilla.org/?x=шеллы"
} catch (e) { // catches a malformed URI
  console.error(e);
}


const btn = document.querySelectorAll('.dropbtn');
for (let i = 0; i < btn.length; i++) {
    const el = document.getElementById("myDropdown" + (i + 1));
   btn[i].addEventListener("click", function() {
      el.classList.toggle("show");
    });
 }

let toggle = document.getElementById("clickeh")
 toggle.addEventListener('click', myFunction, false)

function myFunction(){
  
  document.getElementById("myDropdown3").classList.toggle("show");  
  
}


//document.getElementById("clickeh").onclick = function () {
  //document.getElementById("myDropdown3").classList.toggle("show"); 
   
// }


let toggle2 = document.getElementById("clickme")
 toggle2.addEventListener('click', myFunction2, false)

function myFunction2(){
  
  document.getElementById("myDropdown2").classList.toggle("show");  

}

//document.getElementById("clickme").onclick = function () 
  //document.getElementById("myDropdown2").classList.toggle("show"); 
   
 //}


let delivery = document.getElementById("1")
 delivery.addEventListener('click', myFunction3, false)


function myFunction3(){
  const a = document.getElementById('myDIV');
  a.innerText = "Your order will be delivered by the caterer's driver";
  
// The textContent property sets or returns the text content of the specified node
  // read text content from id .. 
  const c = document.getElementById('text')


if (document.getElementById("text").textContent === "Takeout") {
    document.getElementById("text").textContent = "Delivery";
  } else {
    document.getElementById("text").textContent = "Delivery";
  }
  
   
   // c.innerText = 'Delivery';
 
   //c.innerHTML='Delivery <i class="fa fa-caret-down"></i>';
  
 document.getElementById("myDropdown1").classList.toggle("show");
 
}  
  
  
//}

//document.getElementById('1').onclick = function() {
  //const a = document.getElementById('myDIV');
  //a.innerText = "Your order will be delivered by the caterer's driver";
  
// The textContent property sets or returns the text content of the specified node
  // read text content from id .. 
  //const c = document.getElementById('text')


//if (document.getElementById("text").textContent === "Takeout") {
    //document.getElementById("text").textContent = "Delivery";
 // } else {
    //document.getElementById("text").textContent = "Delivery";
  //}
  
   
   // c.innerText = 'Delivery';
 
   //c.innerHTML='Delivery <i class="fa fa-caret-down"></i>';
  
 //document.getElementById("myDropdown1").classList.toggle("show");
 
//}  
  


document.getElementById('2').onclick = function() {
  const a = document.getElementById('myDIV');
  a.innerText = "Your order will be available for pickup";
 
 //change text on delivery button to takeout 
 
  // read value content from id .. 
  const b = document.getElementById("text") 
if (document.getElementById("text").textContent === "Delivery") {
    document.getElementById("text").textContent = "Takeout";
  } else {
    document.getElementById("text").textContent = "Takeout";
  }
document.getElementById("myDropdown1").classList.toggle("show");
}
  


/*document.getElementById("myDropdown3").classList.toggle("show"); */
   

 
//JS validation zip codes see if can deliver-(client and server side)
 
document.getElementById('clickme').onclick = function() {

  var zipcodes = [12345, 54321, 55901, 55906];
  for(var i = 0;i < zipcodes.length; i++) {
    if (zipcodes[i] == document.getElementById('zipCode').value) {
          alert("Caterer can deliver!");

  }
     
  }


}


//JS validation event date see if caterer can deliver-(client and server side)
 document.getElementById('bday').onchange = function changeContent() {

  var selectedText = document.getElementById('bday').value;
   var selectedDate = new Date(selectedText);
   var now = new Date();
   if (selectedDate < now) {
    alert("Date must be in the future");
   }
};

//JS validation event time see if caterer can deliver-(client and server side)

 document.getElementById('appt').onchange =function changeTime() {
var selectedTime = document.getElementById('appt')

var minTime = selectedTime.min;
var maxTime = selectedTime.max;
  var value = selectedTime.value + ':00' 
  
  
  if(minTime > value ||  value > maxTime) {
  alert('Enter a time between 9am and 10pm')
}
  
 }


   

//create a calendar in JS
// define variables

var nativePicker = document.querySelector('.nativeDatePicker');
var fallbackPicker = document.querySelector('.fallbackDatePicker');
var fallbackLabel = document.querySelector('.fallbackLabel');

var yearSelect = document.querySelector('#year');
var monthSelect = document.querySelector('#month');
var daySelect = document.querySelector('#day');



// hide fallback initially
fallbackPicker.style.display = 'none';
fallbackLabel.style.display = 'none';

// test whether a new date input falls back to a text input or not
var test = document.createElement('input');

try {
  test.type = 'date';
} catch (e) {
  console.log(e.description);
}

// if it does, run the code inside the if() {} block
if(test.type === 'text') {
  // hide the native picker and show the fallback
  nativePicker.style.display = 'none';
  fallbackPicker.style.display = 'block';
  fallbackLabel.style.display = 'block';

  // populate the days and years dynamically
  // (the months are always the same, therefore hardcoded)
  populateDays(monthSelect.value);
  populateYears();
}

function populateDays(month) {
  // delete the current set of <option> elements out of the
  // day <select>, ready for the next set to be injected
  while(daySelect.firstChild){
    daySelect.removeChild(daySelect.firstChild);
  }

  // Create variable to hold new number of days to inject
  var dayNum;

  // 31 or 30 days?
  if(month === 'January' | month === 'March' | month === 'May' | month === 'July' | month === 'August' | month === 'October' | month === 'December') {
    dayNum = 31;
  } else if(month === 'April' | month === 'June' | month === 'September' | month === 'November') {
    dayNum = 30;
  } else {
  // If month is February, calculate whether it is a leap year or not
  var year = yearSelect.value;
  var isLeap = new Date(year, 1, 29).getMonth() == 1;
  isLeap ? dayNum = 29 : dayNum = 28;
  }

  // inject the right number of new <option> elements into the day <select>
  for(i = 1; i <= dayNum; i++) {
    var option = document.createElement('option');
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // if previous day has already been set, set daySelect's value
  // to that day, to avoid the day jumping back to 1 when you
  // change the year
  if(previousDay) {
    daySelect.value = previousDay;

    // If the previous day was set to a high number, say 31, and then
    // you chose a month with less total days in it (e.g. February),
    // this part of the code ensures that the highest day available
    // is selected, rather than showing a blank daySelect
    if(daySelect.value === "") {
      daySelect.value = previousDay - 1;
    }

    if(daySelect.value === "") {
      daySelect.value = previousDay - 2;
    }

    if(daySelect.value === "") {
      daySelect.value = previousDay - 3;
    }
  }
}

function populateYears() {
  // get this year as a number
  var date = new Date();
  var year = date.getFullYear();

  // Make this year, and the 100 years before it available in the year <select>
  for(var i = 0; i <= 100; i++) {
    var option = document.createElement('option');
    option.textContent = year-i;
    yearSelect.appendChild(option);
  }
}

// when the month or year <select> values are changed, rerun populateDays()
// in case the change affected the number of available days
yearSelect.onchange = function() {
  populateDays(monthSelect.value);
}

monthSelect.onchange = function() {
  populateDays(monthSelect.value);
}

//preserve day selection
var previousDay;

// update what day has been set to previously
// see end of populateDays() for usage
daySelect.onchange = function() {
  previousDay = daySelect.value;
}
                                            



/* Vanilla Javascript for shopping cart*/

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
  
 
     
  
     
    var shopItemButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < shopItemButtons.length; i++) {
        shopItemButtons[i].addEventListener('click', addToCartClicked)
    }

    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        removeCartItemButtons[i].addEventListener('click', removeCartItem)
    }

    var cartQuantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < cartQuantityInputs.length; i++) {
        cartQuantityInputs[i].addEventListener('change', quantityChanged)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)


}


  

function addToCartClicked(event) {
    var shopItemContainer = event.target.parentElement.parentElement
    var priceString = shopItemContainer.getElementsByClassName('shop-item-price')[0].innerText
    var itemName = shopItemContainer.getElementsByClassName('shop-item-title')[0].innerText
    var imageUrl = shopItemContainer.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(itemName, imageUrl, priceString)
    updateCartTotal()
}


    

/* Update quantity */
function quantityChanged(event) {
    var quantityInput = event.target
    if (isNaN(quantityInput.value) || quantityInput.value <= 0) {
        quantityInput.value = 1
    }
    updateCartTotal()
}


  //document.getElementbyClassName('dropbtn').myFunction(2).onclick= myFunction3;



function purchaseClicked() {
    alert('Thank you for your purchase!')
  
   var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    while(cartItemContainer.hasChildNodes()) {
        cartItemContainer.removeChild(cartItemContainer.firstChild)
    }
    updateCartTotal()
  document.getElementById("myDropdown3").classList.toggle("show"); 
}


  
   
function addItemToCart(itemName, imageUrl, priceString) {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItemContainer.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == itemName) {
            alert('This item is already in your cart')
            return
        }
    }
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    cartRow.innerHTML = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageUrl}" width="70" height="100">
            <span class="cart-item-title">${itemName}</span>
        </div>
        <span class="cart-price cart-column">${priceString}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" min="1" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
    `
    cartItemContainer.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}









function updateCartTotal() {
      /* Calculate line price */
   
  
  
  var cartRows = document.getElementsByClassName('cart-row')
 
   var total = 0
  var subtotal = 0
 var tax = 0
    var fee = 0
 var tip = 0
var tip_pct_amt = 0
//var tip_pct2 = 0
//var tip_pct3 = 0
  
  for (var i = 0; i < cartRows.length; i++) {
       
    
    var cartRow = cartRows[i]
        
    
    var priceElement = cartRow.getElementsByClassName('cart-price')[0]
       
    
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        
    
    if (priceElement == null || quantityElement == null) 
      
      continue
        
      
      var price = parseFloat(priceElement.innerText.replace('$', ''))
       
     
  
        var quantity = parseInt(quantityElement.value)

       
      
         
  subtotal += price * quantity

  tax = 0.07375 * subtotal
    

 fee =5
   
    
//get tip as a percentage, update total

  
  
   tip_pct_amt = activeTipPercentage * subtotal 

//var tip_pct2 = 0.20 * subtotal

//var tip_pct3 = 0.30 * subtotal
   
 //get custom tip value, enter as a Number
  tip = Number(document.getElementById('customTip').value)

   
    total = subtotal + tax + fee + tip + tip_pct_amt // tip_pct2 + tip_pct3
  
  }
 
  document.getElementsByClassName('totals-value')[0].innerText = '$' + Math.round(total * 100) / 100

 document.getElementsByClassName('subtotal-totals-value')[0].innerText = '$' + Math.round(subtotal * 100) / 100

 document.getElementsByClassName('tax-totals-value')[0].innerText = '$' + Math.round(tax * 100) / 100 


  document.getElementsByClassName('fee-totals-value')[0].innerText= '$' + Math.round(fee * 100) / 100 
  
  
   document.getElementsByClassName('tip-totals-value')[0].innerText= '$' + Math.round(tip * 100) / 100 
 
   document.getElementsByClassName('tip_pct-totals-value')[0].innerText= '$' + Math.round(tip_pct_amt * 100) / 100 
    
    
  }
    
  
  document.getElementsByClassName("customTipBtn")[0].addEventListener('click', addCustomTip)


document.getElementsByClassName("customTipBtn")[0].addEventListener('click', clearCustomTip)

 document.getElementsByClassName("customPctBtn")[0].addEventListener('click', addPct10) 

 document.getElementsByClassName("customPctBtn")[1].addEventListener('click', addPct20) 

 document.getElementsByClassName("customPctBtn")[2].addEventListener('click', addPct30) 
   
function addPct10() {

activeTipPercentage = 0.1
   updateCartTotal()
}

function addPct20() {

activeTipPercentage = 0.2
   updateCartTotal()
}

function addPct30() {

activeTipPercentage = 0.3
   updateCartTotal()
}




function addCustomTip() {


   updateCartTotal()
}

function clearCustomTip(){
document.getElementById('customTip').value = ''

}



document.getElementById("clickme").onclick = function() {demo()}

function demo(){
  let x = document.forms["myForm"]["address"].value;

if (x == "") {
    alert("Form must be filled out");
    return false;
  }}

document.getElementById("clickeh").onclick = function() {test1()}

function test1(){
  let x = document.forms["dateTim"]["bday"].value;

if (x == "") {
    alert("Form must be filled out");
    return false;
  }}



function removeCartItem(event) {
    /* Remove row from DOM and recalc cart total */
   
  
  var buttonElement = event.target
    buttonElement.parentElement.parentElement.remove()
  


        updateCartTotal()
    }

  



