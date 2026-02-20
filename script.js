// Get input elements
const amount = document.getElementById("amount");
const rate = document.getElementById("rate");
const tenure = document.getElementById("tenure");

// Get output elements
const emiOutput = document.getElementById("emi");
const totalInterestOutput = document.getElementById("totalInterest");
const totalPaymentOutput = document.getElementById("totalPayment");

// Function to calculate EMI
function calculateEMI() {

    let P = parseFloat(amount.value);
    let annualRate = parseFloat(rate.value);
    let years = parseFloat(tenure.value);

    if (P > 0 && annualRate > 0 && years > 0) {

        // Convert annual interest rate to monthly
        let R = annualRate / 12 / 100;

        // Convert years to months
        let N = years * 12;

        // EMI Formula
        let EMI = (P * R * Math.pow(1 + R, N)) /
                  (Math.pow(1 + R, N) - 1);

        let totalPayment = EMI * N;
        let totalInterest = totalPayment - P;

        // Display results
        emiOutput.innerText = EMI.toFixed(2);
        totalInterestOutput.innerText = totalInterest.toFixed(2);
        totalPaymentOutput.innerText = totalPayment.toFixed(2);

    } else {
        emiOutput.innerText = "0";
        totalInterestOutput.innerText = "0";
        totalPaymentOutput.innerText = "0";
    }
}

// Live update when input changes
amount.addEventListener("input", calculateEMI);
rate.addEventListener("input", calculateEMI);
tenure.addEventListener("input", calculateEMI);