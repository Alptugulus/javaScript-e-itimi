const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    "X-RapidAPI-Key": "15d6760a7cmshcb06d6ed2ec7d12p1728f7jsn290ef035f496",
  },
};
function gameIdFind(){ 
  const gameItemEl = document.querySelectorAll(".card-game");
  gameItemEl.forEach((item) => {
    item.addEventListener("click", function (e) {

      fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${item.id}`, options)
  .then(response => response.json())
  .catch(err => console.error(err));
  const ID = item.querySelector(".child")
  const URL = item.querySelector(".gameLink")

item.style.background= "white" ;
item.style.border = "red";

          });
  });
}

let global = [];

document.addEventListener("DOMContentLoaded", async () => {
  await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games",
    options
  )
    .then((res) => res.json())
    .then((res) => (global = res));

  async function renderGameCart(filterName) {
    
    let filterData = [];
    if (filterName) {
      filterData = global.map((item) => {
        if (item.title.includes(filterName) || item.genre.includes(filterName)) {
          console.log(item.title)
          return item;
        }
      });
    } else {
      filterData = global;
    }
    const data = filterData.filter((item) => typeof item !== "undefined");

    const container = document.querySelector(".container");
    container.innerHTML = "";

    data.map((item) => {
      const gameCard = `
                 <div class = "card-game" id="${item.id}">
         
                     <img src="${item.thumbnail}"></img>
                     <p class="child" >${item.title}</p>
                     <p class="child">${item.platform} </p>
                     <a class="gameLink child" target="_blank" href="${item.game_url}">Game  link</a>
                     <div class="btnsGroup">
                         <p class= "genre">${item.genre}</p>
                         <button class="like"><img class="heart" src="./images/like.png"></img></button>
                     </div>
                 </div>`;

      container.insertAdjacentHTML("beforeend", gameCard);
    });

    gameIdFind();
  }

  await renderGameCart();

  document.querySelector(".searchBtn").addEventListener("click", (e) => {
    let value = document.querySelector(".search").value;
    renderGameCart(value);
  });

  const heartBtnEl = document.querySelectorAll(".like");
 heartBtnEl.forEach((item) => {
   item.addEventListener("click",
     function () {
       const img = item.querySelector(".heart")
       if(img.src==="http://127.0.0.1:5500/gamesApi/images/like.png")
        img.src="http://127.0.0.1:5500/gamesApi/images/heart.png"        
      else
       img.src="http://127.0.0.1:5500/gamesApi/images/like.png"
     });
 });

});
