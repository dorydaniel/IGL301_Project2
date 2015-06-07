function validateAmount(e) {
    var key = e.keyCode;
    if ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || (key === 8)) {
        return true;
    }
    else {
        return false;
    }
}

function validateRate(e) {
    var key = e.keyCode;
    var value = document.getElementById("rateTxt").value;
    if ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || (key === 8)) {
        if ((value === null) || (value.trim() === "")) {
            return true;
        }
            if ((key === 48) || (key === 96) || (key === 8)) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }

function validateMonths(e) {
    var key = e.keyCode;
    var value = document.getElementById("monthsTxt").value;
    if ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || (key === 8)) {
        if ((value === null) || (value.trim() === "")) {
            return true;
        }
        else if ((key === 48) || (key === 96) || (key === 49) || (key === 97) || (key === 50) || (key === 98) || (key === 8)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

function calculate() {
    var amount = document.getElementById("amountTxt").value;
    var rate = document.getElementById("rateTxt").value;
    var months = document.getElementById("monthsTxt").value;
    document.getElementById("interest").value = amount * rate * months / 100;
}