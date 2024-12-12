// Get elements
const signupBtn = document.getElementById("signupBtn");
const signinBtn = document.getElementById("signinBtn");
const nameField = document.getElementById("nameField");
const title = document.getElementById("title");

// Sign In Button Click Event
signinBtn.onclick = () => {
    toggleForm("Sign In", "0", true, false);
};

// Sign Up Button Click Event
signupBtn.onclick = () => {
    toggleForm("Sign Up", "60px", false, true);
};

// Function to Toggle Form
function toggleForm(titleText, nameFieldHeight, signupDisabled, signinDisabled) {
    nameField.style.maxHeight = nameFieldHeight;
    title.innerHTML = titleText;

    // Toggle button disable classes
    signupBtn.classList.toggle("disable", signupDisabled);
    signinBtn.classList.toggle("disable", signinDisabled);

    // Toggle nested <a> disable classes
    signupBtn.querySelector('a').classList.toggle("disable", signupDisabled);
    signinBtn.querySelector('a').classList.toggle("disable", signinDisabled);
}
