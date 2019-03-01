import './styles.css';
const tenButton = document.getElementById('tenPercent') as HTMLInputElement;
const fifteenButton = document.getElementById('fifteenPercent') as HTMLInputElement;
const twentyButton = document.getElementById('twentyPercent') as HTMLInputElement;
const billAmount = document.getElementById('billAmount') as HTMLInputElement;
const outBillAmount = document.getElementById('outBillAmount');
const outTipPercent = document.getElementById('outTipPercent');
const outTotalToBePaid = document.getElementById('outTotalToBePaid');
const outAmountOfTip = document.getElementById('outAmountOfTip');
const errorMessage = document.getElementById('errorMessage');
const tipAmountReminder = document.getElementById('tipAmountReminder');

billAmount.addEventListener('keyup', () => {
    if (isNaN(Number(billAmount.value)) || Number(billAmount.value) < 0) {
        billAmount.className = "error";
        billAmount.value = "";
        errorMessage.innerText = "Bill amount entered is not a valid amount!";
        outAmountOfTip.innerText = `Amount of tip: $`;
        outTotalToBePaid.innerText = `Total to be Paid: $`;
        outBillAmount.innerText = `Bill Amount: $`;
        return;
    }
    else {
        billAmount.className = "";
        errorMessage.innerText = "";
    }
    if (billAmount.value != null) {
        outBillAmount.innerText = `Bill Amount: $${Number(billAmount.value).toFixed(2)}`;
        finalAmounts();
    }

});

tenButton.addEventListener('click', () => {
    tipThings("10%");
    finalAmounts();

});

fifteenButton.addEventListener('click', () => {
    tipThings("15%");
    finalAmounts();

});

twentyButton.addEventListener('click', () => {
    tipThings("20%");
    finalAmounts();
});

function tipThings(tipAmount: string) {
    outTipPercent.innerText = `Tip Percentage: ${tipAmount}`;
    tipAmountReminder.innerText = `You are tipping ${tipAmount}`;

    tenButton.disabled = false;
    fifteenButton.disabled = false;
    twentyButton.disabled = false;

    if (tipAmount === "20%") {
        twentyButton.disabled = true;
    }
    else if (tipAmount === "15%") {
        fifteenButton.disabled = true;
    }
    else if (tipAmount === "10%") {
        tenButton.disabled = true;
    }
}

function finalAmounts() {
    if (billAmount.value != null && !isNaN(Number(billAmount.value)) &&
        (tenButton.disabled === false || fifteenButton.disabled === false || twentyButton.disabled === false)) {
        let tip = 0;
        if (tenButton.disabled) { tip = .10; }
        else if (fifteenButton.disabled) { tip = .15; }
        else if (twentyButton.disabled) { tip = .20; }

        let amount = Number(billAmount.value);

        outAmountOfTip.innerText = `Amount of tip: $${(amount * tip).toFixed(2)}`;
        outTotalToBePaid.innerText = `Total to be Paid: $${((1 + tip) * amount).toFixed(2)}`;
    }
}