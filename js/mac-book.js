// updating price
function updatePrice(inputId, cost) {
    const extraMemory = document.getElementById(inputId, cost);
    extraMemory.innerText = cost;
    gettingTotal()
}
// getting total price & final total
function gettingTotal() {
    // best price
    const bestPrice = 1299;
    // extraMemory total price
    const extraMemoryTotal = parseFloat(document.getElementById('extra-memory').innerText)
    // extrastorage total price
    const extraStorageTotal = parseFloat(document.getElementById('extra-storage').innerText);
    // delivery cost 
    const deliveryCostTotal = parseFloat(document.getElementById('delivery-cost').innerText);
    // getting total price
    document.getElementById('total-price').innerText = bestPrice + extraMemoryTotal + extraStorageTotal + deliveryCostTotal;
    // getting total for last total
    document.getElementById('final-total').innerText = bestPrice + extraMemoryTotal + extraStorageTotal + deliveryCostTotal;
}
// final discounted total
function discountedTotal() {
    const matchCode = document.getElementById('input');
    if (matchCode.value == 'stevekaku') {
        const finalTotalText = document.getElementById('final-total');
        const finalTotal = parseFloat(finalTotalText.innerText)
        const discount = finalTotal / 5;
        const discountedTotal = finalTotal - discount;
        finalTotalText.innerText = discountedTotal;
        matchCode.value = '';
    }
}

// getting 16gb memory button event-handler
document.getElementById('16gb-btn').addEventListener('click', function () {
    updatePrice('extra-memory', 180)
})
// getting 512gb storage button event-handler
document.getElementById('512gb-btn').addEventListener('click', function () {
    updatePrice('extra-storage', 100)
})
// getting 1TB storage button event-handler
document.getElementById('1tb-btn').addEventListener('click', function () {
    updatePrice('extra-storage', 180)
})
// getting aug21 button event-handler
document.getElementById('aug21-btn').addEventListener('click', function () {
    updatePrice('delivery-cost', 20)
})

// apply button event-handler
document.getElementById('apply-button').addEventListener('click', function () {
    discountedTotal()
})
