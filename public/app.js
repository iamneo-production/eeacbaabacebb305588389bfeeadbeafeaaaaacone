function applyDiscount() {
    var totalAmount = parseFloat(document.getElementById("amountInput"));
    var discountedAmount = totalAmount
    if (totalAmount >= 1000 && totalAmount <= 5000) {
        discountedAmount = totalAmount - (totalAmount * 0.05)
    }
    else if (totalAmount >= 5001 && totalAmount <= 7500) {
        discountedAmount = totalAmount - (totalAmount * 0.10)
    }
    if (totalAmount > 7500) {
        discountedAmount = totalAmount - (totalAmount * 0.15)
    }

}