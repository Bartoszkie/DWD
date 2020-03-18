let opened = false;
const mobileNavbar = document.getElementById("mobile-navbar");

let videoOpen = true;
const closeVideo = document.getElementById("video-cont");

document.getElementById("hamburger").addEventListener("click", () => {
  if (opened) {
    opened = false;
    mobileNavbar.style.transform = "translateY(-150%)";
    mobileNavbar.style.opacity = "0";
  } else {
    opened = true;
    mobileNavbar.style.transform = "translateY(20%)";
    mobileNavbar.style.opacity = "1";
  }
});

window.addEventListener("resize", () => {
  const vw = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  console.log(vw);
  console.log(opened);
  if (vw >= 900) {
    opened = true;
    mobileNavbar.style.transform = "translateY(20%)";
    mobileNavbar.style.opacity = "1";
  }
});

document.getElementById("video-close").addEventListener("click", () => {
  if (videoOpen) {
    videoOpen = false;
    closeVideo.style.display = "none";
  } else {
    videoOpen = true;
    closeVideo.style.display = "unset";
  }
});

document.getElementById("header__btn").addEventListener("click", () => {
  closeVideo.style.display = "unset";
});
