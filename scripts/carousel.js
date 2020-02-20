var slideIndex = 1;
showSlides(slideIndex);

const smallSlidesArray = Array.from(
  document.getElementsByClassName("smallSlides-img")
);

const biggerSlidesArray = Array.from(
  document.getElementsByClassName("mySlides-img")
);

let resized = false;
var currentAciveElement;

function plusSlides(n) {
  showSlides((slideIndex += n));
  biggerSlidesArray.filter(item => {
    if (item.parentElement.style.display === "block") {
      return (currentAciveElement = item.getAttribute("src"));
    }
  });
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

  console.log(isBorder);

  if (isBorder) {
    smallSlidesArray.find(item => {
      if (item.classList.contains("active-sm")) {
        item.classList.remove("active-sm");
      }
    });
    smallSlidesArray.filter(item => {
      if (item.getAttribute("src") === currentAciveElement) {
        item.classList.add("active-sm");
      }
    });
  } else {
    smallSlidesArray.filter(item => {
      if (item.getAttribute("src") === currentAciveElement) {
        item.classList.add("active-sm");
      }
    });
  }
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
    console.log('iamin');
    console.log(resized);
    
  if (!resized) {
    biggerSlidesArray.find(item => {
      if (item.parentElement.style.display === "block") {
        item.classList.add("resized");
        resized = true;
      }
    });
  } else {
    biggerSlidesArray.find(item => {
      if (item.parentElement.style.display === "block") {
        item.classList.remove("resized");
        resized = false;
      }
    });
  }
}
