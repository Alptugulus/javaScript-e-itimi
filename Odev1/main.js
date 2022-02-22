const buttonEl = document.querySelector("#login");

buttonEl.addEventListener("click", login);

function createToastMessage(tag, className, id, color, innerText, fonntfamily) {
  function removeToast() {
    const toastMsg = document.querySelector(`.${className}`);
    if (toastMsg) {
      toastMsg.remove();
    }
  }

  let toastMessage = document.createElement(tag);
  toastMessage.className = className;
  toastMessage.id = id;
  toastMessage.style.color = color;
  toastMessage.style.marginTop = "20px";
  toastMessage.innerText = innerText;
  toastMessage.style.fontFamily = fonntfamily;

  const empty = document.querySelector(`.${className}`);

  if (!empty) {

    document.querySelector(".wrapper").appendChild(toastMessage);
  }

  setTimeout(removeToast, 2500);
}

function login(e) {
  const username = document.querySelector("#userName").value;
  const password = document.querySelector("#password").value;
  if (username.trim() === "admin" && password === "1234") {
    createToastMessage(
      "div",
      "msg",
      "msgId",
      "green",
      "login sucsesfull",
      "arial"
    );
  } else {
    createToastMessage(
      "div",
      "msg",
      "msgId",
      "red",
      "login fail",
      "Times New Roman"
    );
  }
}

const fPassword = document.querySelector("#fPassword");
fPassword.addEventListener("click", forgot);

function forgot(event) {
  createToastMessage(
    "div",
    "forgot",
    "forgotId",
    "aquqblue",
    "Şifre yenileme maili gönderilmiştir"
  );
}

const typeCheck = document.querySelector("#rememberMe");

typeCheck.addEventListener("change", remember);

function remember(event) {
  if (event.target.checked) {
    createToastMessage(
      "span",
      "remember",
      "rememberId",
      "yellow",
      "kullanıcı adınız kaydedilecek"
    );
  }
}

document
  .querySelector("#password")
  .addEventListener("keydown", function (event) {
    var caps = event.getModifierState && event.getModifierState("CapsLock");
    console.log(caps);
    if (caps) {
      alert("CapsLock Open");
    }
  });



