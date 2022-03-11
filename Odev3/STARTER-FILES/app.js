const thisMount = document.querySelector(".month");
thisMount.innerHTML = "March";
let zero = document.querySelectorAll(".days");
zero.forEach((element) => {
  console.log(element.innerHTML);
  Number = element.innerHTML;
  if (element.innerHTML % 2 == 0) {
    element.style.background = "yellow";
  }

  element.innerHTML = "0" + element.innerHTML;
});
console.log(zero);
const empt = document.querySelectorAll(".empty");
empt.forEach((element) => {
  element.innerHTML = "-";
});
const r = document.querySelector(".previous");
r.onclick = function () {
  alert("r yapıyorsunuz ");
};
const d = document.querySelector(".next");
d.onclick = function () {
  alert("geleceği düşünme  gelecekte birgün gelecek ");
};
