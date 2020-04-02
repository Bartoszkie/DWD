let opened = false;
const mobileNavbar = document.getElementById("mobile-navbar");

let videoOpen = true;
const closeVideo = document.getElementById("video-cont");

const modal = document.querySelector(".modal-info");
const cookies = document.querySelector(".cookies-bar");

const header__list__link = Array.from(
  document.getElementsByClassName("header__list__link")
);

const querySelectorToHide = Array.from(document.querySelectorAll(".toHide"));

window.onload = changeBehaviourOfNavigationLinks();

window.addEventListener("resize", () => {
  changeBehaviourOfNavigationLinks();
});

function changeBehaviourOfNavigationLinks() {
  const vw = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );

  if (vw <= 900) {
    header__list__link.forEach(element => element.classList.add("toHide"));
    const querySelectorToHide = Array.from(
      document.querySelectorAll(".toHide")
    );
    querySelectorToHide.forEach(element =>
      element.addEventListener("click", () => {
        opened = false;
        mobileNavbar.style.transform = "translateY(-150%)";
        mobileNavbar.style.opacity = "0";
      })
    );
  } else {
    const querySelectorToHide = Array.from(
      document.querySelectorAll(".toHide")
    );
    querySelectorToHide.forEach(element =>
      element.addEventListener("click", () => {
        opened = false;
        mobileNavbar.style.transform = "translateY(0%)";
        mobileNavbar.style.opacity = "1";
      })
    );
  }
}

document.getElementById("hamburger").addEventListener("click", () => {
  mobileNavbar.style.display = "unset";

  if (opened) {
    opened = false;
    mobileNavbar.style.opacity = "0";

    mobileNavbar.style.transform = "translateY(-150%)";
  } else {
    opened = true;

    mobileNavbar.style.opacity = "1";
    mobileNavbar.style.transform = "translateY(0%)";
  }
});

window.addEventListener("resize", () => {
  const vw = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  if (vw >= 900) {
    opened = true;
    mobileNavbar.style.transform = "translateY(0%)";
    mobileNavbar.style.opacity = "1";
    mobileNavbar.style.display = "unset";
  } else if (vw == 900 || vw <= 900) {
    opened = false;
    mobileNavbar.style.transform = "translateY(-150%)";
    mobileNavbar.style.display = "none";
    mobileNavbar.style.opacity = "0";
  }
});

function closeVideoFunc() {
  if (videoOpen) {
    closeVideo.style.display = "none";
    videoOpen = false;
  } else {
    videoOpen = true;
    closeVideo.style.display = "unset";
  }
}

document.getElementById("header__btn").addEventListener("click", () => {
  closeVideo.style.display = "unset";
  videoOpen = true;
});

document.getElementById("header__btn--1").addEventListener("click", () => {
  closeVideo.style.display = "unset";
  videoOpen = true;
});

document.getElementById("close-modal").addEventListener("click", () => {
  modal.style.display = "none";
});

document.getElementById("close-cookies").addEventListener("click", () => {
  cookies.style.transform = "translateY(100%)";
  createCookie("cookieAgree", true, 1);
});

window.onload = checkCookiesAgree();
var exists = false;

function checkCookiesAgree() {
  const name = "cookieAgree";
  getNameOfCookie(name);
  if (exists) {
    cookies.style.display = "none";
  } else {
    cookies.style.display = "flex";
  }
}

function getNameOfCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) {
    exists = true;
    console.log(exists);
    return parts
      .pop()
      .split(";")
      .shift();
  } else {
    exists = false;
    console.log(exists);
  }
}

function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}
