const buttonEl = document.querySelector("#login");

buttonEl.addEventListener("click", login);

function login(e) {
  const username = document.querySelector("#userName").value;
  const password = document.querySelector("#password").value;
  let toastMessage = document.createElement("div");
  toastMessage.className = "msg";
  toastMessage.id = "msgID";

  if (username === "admin" && password === "1234") {
    toastMessage.innerText = "Login Successful";
  } else {
    toastMessage.innerText = "Login Failed";
  }
  const ali = document.querySelector(".msg");
  if (!ali) {
    document.body.appendChild(toastMessage);
  }
  setTimeout(removeToast, 3000);
}
function removeToast() {
  const toastMsg = document.querySelector(".msg");
  if (toastMsg) {
    toastMsg.remove();
  }
}
const fPassword = document.querySelector("#fPassword");
fPassword.addEventListener("click", forgot);
console.log(fPassword);

function forgot(event) {
  console.log(event);
  let toastMessage = document.createElement("div");
  toastMessage.className = "classA";
  toastMessage.id = "pswrdd";
  toastMessage.innerText =
    "şifre sıfırlamak için başka bir sayfaya yönlendirildiniz";

  const domclassA = document.querySelector(".classA");
  function removeToast() {
    const toastMsg = document.querySelector(".classA");
    if (toastMsg) {
      toastMsg.remove();
    }
  }
  if (!domclassA) {
    document.body.appendChild(toastMessage);
  }
  setTimeout(removeToast, 3000);
}

const typeCheck = document.querySelector("#rememberMe");

typeCheck.addEventListener("change", remember);

function remember(event) {
  function removeToast() {
    const toastMsg = document.querySelector(".classB");
    if (toastMsg) {
      toastMsg.remove();
    }
  }
  setTimeout(removeToast, 3000);


  let toastMsg = document.createElement("div");
  toastMsg.className = "classB";
  toastMsg.id = "ıd3";
  document.body.appendChild(toastMsg);
  console.log(event.target.checked);

  if (event.target.checked) {
    toastMsg.innerText = "kullanıcı adınız kaydedilecek";
  }
}


