import './styles.css';
console.log('Ready to Party');


const tenButton = document.getElementById('tenPercent') as HTMLInputElement;
const fifteenButton = document.getElementById('fifteenPercent') as HTMLInputElement;
const twentyButton = document.getElementById('twentyPercent') as HTMLInputElement;
const billAmount = document.getElementById('billAmount') as HTMLInputElement;
const outBillAmount = document.getElementById('outBillAmount');
const outTipPercent = document.getElementById('outTipPercent');
const outTotalToBePaid = document.getElementById('outTotalToBePaid');
const outAmountOfTip = document.getElementById('outAmountOfTip');

billAmount.addEventListener('change', () => {
    console.log(billAmount.value);
    if (billAmount.value != null) {
        outBillAmount.innerText = `Bill Amount: $${billAmount.value}`;
        finalAmounts();
    }

});

tenButton.addEventListener('click', () => {
    outTipPercent.innerText = "Tip Percentage: 10%";
    tenButton.disabled = true;
    fifteenButton.disabled = false;
    twentyButton.disabled = false;
    finalAmounts();

});

fifteenButton.addEventListener('click', () => {
    outTipPercent.innerText = "Tip Percentage: 15%";
    tenButton.disabled = false;
    fifteenButton.disabled = true;
    twentyButton.disabled = false;
    finalAmounts();

});

twentyButton.addEventListener('click', () => {
    outTipPercent.innerText = "Tip Percentage: 20%";
    tenButton.disabled = false;
    fifteenButton.disabled = false;
    twentyButton.disabled = true;
    finalAmounts();
});

function finalAmounts() {
    if (billAmount.value != null &&
        (tenButton.disabled === false || fifteenButton.disabled === false || twentyButton.disabled === false)) {
        let tip = 0;
        if (tenButton.disabled) { tip = 10; }
        else if (fifteenButton.disabled) { tip = 15; }
        else if (twentyButton.disabled) { tip = 20; }

        outAmountOfTip.innerText = `Amount of tip: $${tip}`;
    }
}