function denetle() {
  const derece = 6;
  const dereces = 0.01;
  const zaman = new Date();
  var alp = zaman.getMilliseconds() * dereces ;
  var saniye = zaman.getSeconds()   ;
  var dakika = zaman.getMinutes() * derece;
  var saat = zaman.getHours() * 30 + dakika / 12;

  document.querySelector(".saniye").style.transform =
    "rotate(" + saniye+  alp +  "deg)";
  document.querySelector(".yelkovan").style.transform =
    "rotate(" + dakika + "deg)";
  document.querySelector(".akrep").style.transform = "rotate(" + saat + "deg)";
}

setInterval(denetle, 1);
