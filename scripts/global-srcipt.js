let opened = false;
const mobileNavbar = document.getElementById("mobile-navbar");

let videoOpen = true;
const closeVideo = document.getElementById("video-cont");

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
  if (opened) {
    opened = false;
    mobileNavbar.style.transform = "translateY(-150%)";
    mobileNavbar.style.opacity = "0";
  } else {
    console.log(opened);
    opened = true;
    mobileNavbar.style.transform = "translateY(0%)";
    mobileNavbar.style.opacity = "1";
    console.log(opened);
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
  }
});

function closeVideoFunc() {
  if (videoOpen) {
    console.log("Klikiniete na iksa TRUE");
    closeVideo.style.display = "none";
    videoOpen = false;
  } else {
    console.log("Klikiniete na iksa FALSE");
    videoOpen = true;
    closeVideo.style.display = "unset";
  }
}

document.getElementById("header__btn").addEventListener("click", () => {
  closeVideo.style.display = "unset";
  videoOpen = true;
});
