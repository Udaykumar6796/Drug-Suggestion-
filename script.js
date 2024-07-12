// script.js
document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("searchButton");
    const diseaseInput = document.getElementById("diseaseInput");
    const resultsList = document.getElementById("resultsList");

    searchButton.addEventListener("click", function() {
        const disease = diseaseInput.value;
        if (disease) {
            const resultItem = document.createElement("li");
            resultItem.textContent = "Ayurvedic Drug: Sudarsana vati";
            resultItem.textContent = "Ayurvedic Drug: Sudarsana vati";
            resultsList.appendChild(resultItem);
            resultsList.appendChild(resultItem);
        }
    });
});
