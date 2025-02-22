// let s = 0;
// setInterval(function() {
//     s++;
//     document.getElementById("t").textContent = seconds ;
// }, 1000);

let num = 2 
let ul = document.getElementsByTagName("ul")[0]
function func1() {
    num++;
    let newli = document.createElement("li")
    newli.innerHTML = ` list  ${num} `;
    ul.append(newli)
    newli.addEventListener("click", function () {
                newli.remove();
            });
}