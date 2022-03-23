// const all = document.querySelectorAll(".row");
// const caps = document.querySelector(".caps");
// caps.addEventListener("click", () => {
//   let result = all.toLowerCase();
// });
// caps,
//   all.forEach((element) => {
//     console.log(element.innerText);

//     element.innerText = element.innerText.toLowerCase();
//   });

// //function lower(){
// //  let result = all.toLowerCase();

// //}
let all = document.querySelectorAll(".row button");
//console.log(all);
let capsLock = "close";

const caps = document.querySelector(".caps");
caps.addEventListener("click", () => {
  all.forEach((button) => {
    //console.log(button.dataset.key);
    //button.classList.add("jiggle")

    if (capsLock === "open") {
      button.innerText = button.innerText.toLowerCase();
    } else {
      button.innerText = button.innerText.toUpperCase();
    }
  });

  if (capsLock === "open") {
    capsLock = "close";
  } else if (capsLock === "close") {
    capsLock = "open";
  }
  console.log(capsLock);
});

let firstName = prompt("adınızı giriniz", "alp");
firstName = firstName.toLocaleUpperCase();
for (let i = 0; i < firstName.length; i++) {
  all.forEach((button) => {
    if (button.innerText === firstName[i]) {
      button.classList.add("jiggle");
    }
  });
}
let nums = document.querySelectorAll(".num");
nums.forEach(function (element) {
  element.innerHTML = "F" + element.innerHTML;
});
const enter = document.querySelector(".enter");
enter.addEventListener("click", () => {
  all.forEach((element) => {
    element = element.style.backgroundColor = "red";
  });
});
