const  textInput = document.getElementById("textarea");
const  textCounter = document.getElementById("char-count");
const  tweetButton = document.getElementById("tweet-button");

textInput.addEventListener("input", () => {
    updateCharCount();
    validateTweet();
});

function updateCharCount() {
    const used = textInput.value.length;
    const remaining = 160 - used;
    
    textCounter.textContent = `${remaining} char remaining`;

}

function validateTweet() {
    const length = textInput.value.length;

    if (length > 160) {
        tweetButton.disabled = true;
        textCounter.textContent = "Limit exceeded (160 max)";
    } else {
        tweetButton.disabled = false;
        textCounter.textContent = `${remaining} char remaining`;
    }
}