// CONFIG
let tax = 0.18; //18% TAXES FOR ONTARIO
let deliveryCharge = parseFloat(document.getElementsByClassName('deliveryAmount')[0].innerText); //FIXED VALUE FOR DELIVERY

// IF THE USER CLICKS THE +, INCREMENT 1
function increment(e) {     
     // WE DECLARE THE VARIABLES
     // SUBTOTAL GETS THE PRICE OF THE ROW ITEM AND STORES IT IN A VARIABLE
     const subtotal = document.getElementsByClassName('item-in-cart-subtotal')[e].innerText / document.getElementsByClassName('quantity')[e].innerText;
     let count = document.getElementsByClassName('quantity')[e].innerText;
     //WE UPDATE THE QUANTITY     
     count++;      
     document.getElementsByClassName('quantity')[e].innerText = count;      
     //AND MULTIPLY TO GET THE SUBTOTAL
     document.getElementsByClassName('item-in-cart-subtotal')[e].innerText = (subtotal * count).toFixed(2);
     // EACH TIME WE INCREMENT OR DECREMENT WE CALCULATE ITEM TOTAL
     calcItemTotal()
}

// IF THE USER CLICKS THE +, DECREMENT 1
function decrement(e) {
    // SUBTOTAL GETS THE PRICE OF THE ROW ITEM AND STORES IT IN A VARIABLE
    const subtotal = document.getElementsByClassName('item-in-cart-subtotal')[e].innerText / document.getElementsByClassName('quantity')[e].innerText;
    let count = document.getElementsByClassName('quantity')[e].innerText;
   // WE DON'T LET THE USER ORDER ZERO
   if(count < 2){
        return false;
   }
   count--;
   document.getElementsByClassName('quantity')[e].innerText = count;
   //AND MULTIPLY TO GET THE SUBTOTAL
   document.getElementsByClassName('item-in-cart-subtotal')[e].innerText = (subtotal * count).toFixed(2);
   // EACH TIME WE INCREMENT OR DECREMENT WE CALCULATE ITEM TOTAL
   calcItemTotal()
}

// DELETE ITEM FUNCTION
function deleteItem(button) {
     // We add a class to trigger the fade-out animation
     button.parentNode.classList.add('fade-out');

     // After the animation completes, remove the parent element AND calculate total
     setTimeout(() => {
          button.parentNode.remove();
          calcItemTotal()
     }, 500);
     
}

//CALCULATE ITEM TOTAL
function calcItemTotal(){
     let elements = document.getElementsByClassName('item-in-cart-subtotal');     
     let sum = 0;
     Array.from(elements).forEach(element => {
          sum += parseFloat(element.textContent)          
     });
     document.getElementsByClassName("itemsTotalAmount")[0].innerText = parseFloat(sum).toFixed(2);
     document.getElementsByClassName("taxAmount")[0].innerText = parseFloat(sum * tax).toFixed(2);
     document.getElementsByClassName("orderTotalAmount")[0].innerText = (parseFloat(sum) + (parseFloat(sum * tax)) + deliveryCharge).toFixed(2);
}

//WE CALCULATE THE TOTAL ON PAGE LOAD
calcItemTotal()
