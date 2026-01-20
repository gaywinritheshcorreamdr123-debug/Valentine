let noClickCount = 0;

const noMessages = [
    "Are you sure?",
    "Really sure?",
    "Think again 😢",
    "Please Nidhi 🥺",
    "Don’t break my heart 💔",
    "Last chance 😭"
];

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    noButton.innerText = noMessages[noClickCount % noMessages.length];
    noClickCount++;

    let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentSize + 6) + "px";
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
