function denetle() {
  const derece = 6;
  const dereces = 30
  const zaman = new Date();

  var saniye = zaman.getSeconds() * derece;
  var dakika = zaman.getMinutes() * derece;
  var saat = zaman.getHours() * 30 + (dakika / 12) ; 

  document.querySelector(".saniye").style.transform =
    "rotate(" + saniye + "deg)";
  document.querySelector(".yelkovan").style.transform =
    "rotate(" + dakika + "deg)";
  document.querySelector("akrep").style.transform = "rotate(" + saat + "deg)";
}

setInterval(denetle, 1000);
