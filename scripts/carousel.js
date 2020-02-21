var slideIndex = 1;
let resized = false;
var currentAciveElement;
const smallSlidesArray = Array.from(
  document.getElementsByClassName("smallSlides-img")
);

const biggerSlidesArray = Array.from(
  document.getElementsByClassName("mySlides-img")
);

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
  setCurrentActiveElement();
  createBorder();
}

(function changePictureFromImage() {
  let clicked;
  smallSlidesArray.forEach(item =>
    item.addEventListener("click", () => {
      clicked = item.getAttribute("src");
      biggerSlidesArray.filter(biggerItem => {
        if (biggerItem.getAttribute("src") === clicked) {
          removeBlock();
          biggerItem.parentElement.style.display = "block";
        }
      });
      createBorder();
    })
  );
})();

function removeBlock() {
  biggerSlidesArray.find(item => {
    if (item.parentElement.style.display === "block") {
      item.parentElement.style.display = "none";
    }
  });
}

function createBorder() {
  const isBorder = smallSlidesArray.find(item =>
    item.classList.contains("active-sm")
  );

  if (isBorder) {
    setCurrentActiveElement();
    smallSlidesArray.find(item => {
      if (item.classList.contains("active-sm")) {
        item.classList.remove("active-sm");
      }
    });
    addClassActiveSm();
  } else {
    setCurrentActiveElement();
    addClassActiveSm();
  }
}

function addClassActiveSm() {
  smallSlidesArray.filter(item => {
    if (item.getAttribute("src") === currentAciveElement) {
      item.classList.add("active-sm");
    }
  });
}

function setCurrentActiveElement() {
  biggerSlidesArray.filter(item => {
    if (item.parentElement.style.display === "block") {
      return (currentAciveElement = item.getAttribute("src"));
    }
  });
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function resize() {
  if (!resized) {
    biggerSlidesArray.find(item => {
      if (item.parentElement.style.display === "block") {
        item.style.transform = "scale(1.5)";
        changePositionOfControls(resized);
        resized = true;
      }
    });
  } else {
    biggerSlidesArray.find(item => {
      if (item.parentElement.style.display === "block") {
        item.style.transform = "scale(1)";
        changePositionOfControls(resized);
        resized = false;
      }
    });
  }
}

function changePositionOfControls(isResized) {
  let slideshowTopATag = Array.from(
    document.querySelectorAll(".slideshow-top a")
  );

  if (!isResized) {
    slideshowTopATag.forEach(item => (item.style.top = "110%"));
  } else {
    slideshowTopATag.forEach(item => (item.style.top = "90%"));
  }
}
