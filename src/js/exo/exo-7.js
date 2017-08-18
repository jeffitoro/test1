let section7 = document.querySelector("#exo-7");
let btn = section7.querySelectorAll("button");

let deleteB = function () {
    let parent = this.parentElement;
    parent.removeChild(this);
    // section7.removeChild(this);
}
// btn.addEventListener("click", d);

btn.forEach(function (event) {
    event.addEventListener("click", deleteB);
});