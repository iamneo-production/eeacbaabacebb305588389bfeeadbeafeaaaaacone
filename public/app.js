function applyDiscount() {
    var totalAmount = parseFloat(document.getElementById("amountInput").value);
    var discountedAmount = totalAmount
    if (totalAmount >= 1000 && totalAmount <= 5000) {
        discountedAmount = totalAmount - (totalAmount * 0.05)
    }
    else if (totalAmount >= 5001 && totalAmount <= 7500) {
        discountedAmount = totalAmount - (totalAmount * 0.10)
    }
    else if (totalAmount > 7500) {
        discountedAmount = totalAmount - (totalAmount * 0.15)
    }
    else{

    }
    document.getElementById("discountedAmount").innerHTML = "Discounted Amount: $"+discountedAmount.toFixed(2)
    if(totalAmount>7500){
        document.getElementById("discountedAmount").className="green-bold"

    }
    else if(totalAmount>5000){
        document.getElementById("discountedAmount").className="green"

    }
    else{
        document.getElementById("discountedAmount").className=""
    }

}