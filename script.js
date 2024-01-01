const textInput = document.querySelector(".inputs input"),
palindromeBtn = document.querySelector(".inputs .btn"),
infoText = document.querySelector(".container .text");
let filterInput;

      palindromeBtn.addEventListener("click", () => {
        // spliting  user input  character, reversing them
        // and joining them in a single word
        let reverseInput = filterInput.split("").reverse().join("");
        infoText.style.display = "block";
        if (filterInput != reverseInput) {
            return infoText.innerHTML = `No, <span>'${textInput.value}'</span> isn't a palindrome`
        }
        infoText.innerHTML = `Yes, <span>'${textInput.value}'</span> is a palindrome`;
      })

textInput.addEventListener("keyup", () => {
    // removing spaces  & all special characters from entered value
    filterInput = textInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if (filterInput) {
       return palindromeBtn.classList.add("active");
    }
    infoText.style.display = "none";
    palindromeBtn.classList.remove("active");
})