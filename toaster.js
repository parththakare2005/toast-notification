const toast = document.getElementById("toast");

function showToast(message, color) {
    toast.textContent = message;
    toast.style.backgroundColor = color;
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 3000);
}

document.querySelector(".success-toast").addEventListener("click", () => {
    showToast("Successfully Submitted!", "#28a745");
});

document.querySelector(".danger-toast").addEventListener("click", () => {
    showToast("Submission Failed!", "#dc3545");
});

document.querySelector(".info-toast").addEventListener("click", () => {
    showToast("Information Message!", "#17a2b8");
});

document.querySelector(".warning-toast").addEventListener("click", () => {
    showToast("Warning Message!", "#ffc107");
});