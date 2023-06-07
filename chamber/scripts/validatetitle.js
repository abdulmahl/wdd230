const positionTitle = document.querySelector(".position-title");
const titleError = document.querySelector(".valid-title");

positionTitle.addEventListener("input", function(e) {
    const pattern = /^[A-Za-z\s-]{7,}$/;
    const currentValue = e.target.value;
    const valid = pattern.test(currentValue);

    if(valid) {
        titleError.style.display = "none";
    } else {
        titleError.style.display = "revert"
    }
});