// const btns = document.querySelectorAll(".add");
// const products = document.querySelectorAll(".products li");
// console.log(btns);
// console.log(products);
// products.forEach((product, index) => {
//   btns[index].addEventListener("click", () => {
//     const img = product.querySelector(".plate img").src;
//     const productName = product.querySelector(
//       ".content .menu-item"
//     ).textContent;

//     const price = product.querySelector(".content .price").textContent;

//     const item = `
//     <li>
//       <div class="plate">
//         <img src="${img}" alt="Fish Sticks and Fries" class="plate" />
//         <div class="quantity">1</div>
//       </div>
//       <div class="content">
//         <p class="menu-item">${productName}</p>
//         <p class="price">${price}</p>
//       </div>
//       <div class="quantity__wrapper">
//         <button class="decrease">
//           <img src="images/chevron.svg" />
//         </button>
//         <div class="quantity">1</div>
//         <button class="increase">
//           <img src="images/chevron.svg" />
//         </button>
//       </div>
//       <div class="subtotal">
//       ${price}
//       </div>
//     </li>`;

//     const cart = document.querySelector(".cart-summary");
//     cart.insertAdjacentHTML("beforeend", item);

//     const allCartItems = cart.querySelectorAll("li");

//     allCartItems.forEach((item, index) => {
//       item.querySelector(".decrease").addEventListener("click", () => {
//         item.querySelector(".plate .quantity").textContent--;
//         item.querySelector(".quantity__wrapper .quantity").textContent--;
//         console.log(index);
//       });

//       item.querySelector(".increase").addEventListener("click", () => {
//         item.querySelector(".plate .quantity").textContent++;
//         item.querySelector(".quantity__wrapper .quantity").textContent++;
//       });
//     });
//   });
// });
/*const names = document.querySelectorAll(".products .menu-item");
const price = document.querySelectorAll(".products .price");
names.forEach((element , index) => {

  console.log(`${price[index].innerHTML}-${names[index].innerHTML}`);
});
price.forEach((element) => {
  console.log(element.innerHTML);
});
console.log(price[0]);
// for (let i = 0; i < price.length ; i++) {
//   console.log(`${price[i].innerHTML}-${names[i].innerHTML}`);
// }*/

/*const btns = document.querySelectorAll(".add");
btns.forEach((element, index) => {
  console.log(element.innerText);

  element.addEventListener(
    "click",
    function () {
      element.innerText = `${element.innerText} ${++index}`;
    },
    { once: true }
  );
});*/

const prices = document.querySelectorAll(".price");

prices.forEach((element) => {
  element.style.textDecoration = "line-through";
  element.style.margin = 0;

  //console.log(Number(element.innerText.substring(1)));
  //element.innerText = Number(element.innerText.substring(1)) ;

  const discountPrice = `
  
  
  <span class="" style="text-decoration:initial"> ${
    Number(element.innerText.substring(1)) - 1
  } </span>
  
  `;
  element.parentNode.insertAdjacentHTML("beforeend", discountPrice);
  console.log(element.parentNode);
});
