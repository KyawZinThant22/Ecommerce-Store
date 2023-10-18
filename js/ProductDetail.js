var quantity =  document.getElementById("quantityValue")



function decrement(){
    var quantity =  parseInt(document.getElementById("quantityValue").value)
    if(quantity >= 2){
        document.getElementById("quantityValue").value = quantity - 1;
    }
    
}

function increment(){
    var quantity =  parseInt(document.getElementById("quantityValue").value)
    document.getElementById("quantityValue").value = quantity + 1;
}