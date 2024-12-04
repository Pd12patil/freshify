
document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("payment-form");
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');

    const creditCardDetails = document.getElementById("credit-card-details");
    const upiDetails = document.getElementById("upi-details");
    const netBankingDetails = document.getElementById("net-banking-details");
    const walletDetails = document.getElementById("wallet-details");

    creditCardDetails.style.display = "none";
    upiDetails.style.display = "none";
    netBankingDetails.style.display = "none";
    walletDetails.style.display = "none";

    paymentMethods.forEach(function (method) {
        method.addEventListener("change", function () {
            creditCardDetails.style.display = "none";
            upiDetails.style.display = "none";
            netBankingDetails.style.display = "none";
            walletDetails.style.display = "none";

            switch (method.value) {
                case "Credit Card":
                    creditCardDetails.style.display = "block";
                    break;
                case "UPI":
                    upiDetails.style.display = "block";
                    break;
                case "Net Banking":
                    netBankingDetails.style.display = "block";
                    break;
                case "Wallets":
                    walletDetails.style.display = "block";
                    break;
                default:
                    break;
            }
        });
    });

});
