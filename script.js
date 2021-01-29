

function getInputValue(booking, isIncrease) {

    const bookingInput = document.getElementById(booking + "-Input");

    const bookingInputNumber = parseInt(bookingInput.value);

    let bookingInputIncress = 0;

    if (isIncrease == true) {

        bookingInputIncress = bookingInputNumber + 1;
    }
    if (isIncrease == false && bookingInputNumber > 0) {

        bookingInputIncress = bookingInputNumber - 1;
    }
    bookingInput.value = bookingInputIncress;

    calculationTotal();

}


// calcualation part

function calculationTotal() {

    const bookingInputNumber = getInputNumber("first-Input");

    const firstClassSum = bookingInputNumber * 150;

    const economyInputNumber = getInputNumber("econoy-Input");

    const economyClassSum = economyInputNumber * 100;

    const subtotal = firstClassSum + economyClassSum;

    document.getElementById("subTotal").innerText = '$' + subtotal;

    const vat = subtotal * 10 / 100;

    document.getElementById("vat").innerText = '$' + vat;

    const total = subtotal + vat;

    document.getElementById("total").innerText = '$' + total;

}


function getInputNumber(bookingValue) {

    const bookingInput = document.getElementById(bookingValue);

    const bookingInputNumber = parseInt(bookingInput.value);

    return bookingInputNumber;
}

