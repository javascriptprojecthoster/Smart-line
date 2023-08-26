document.addEventListener("DOMContentLoaded", function () {
  /* SLIDES */
  const slideButton = document.querySelectorAll(".slideButton");
  const slides = document.getElementsByName("slides");

  for (const i of slideButton) {
    i.addEventListener("click", function () {
      for (const i of slideButton) {
        i.classList.remove("slideButton-checked");
      }
      i.classList.add("slideButton-checked");
    });
  }

  // Маска номера телефона и Email
  const formTel = document.getElementById("formTel");
  const formEmail = document.getElementById("formName");
  const formCheckbox = document.getElementById("formCheckbox");

  const maskTel = IMask(formTel, {
    mask: "+{7} (000) 000-00-00",
  });

  // Валидация формы
  const formButton = document.getElementById("formButton");
  const form = document.getElementById("form");

  formTel.addEventListener("input", phoneInputHandler);

  function phoneInputHandler() {
    if (maskTel.masked.isComplete) {
      formButton.disabled = false;
    } else {
      formButton.disabled = true;
    }
  }

  formButton.addEventListener("click", function (e) {
    e.preventDefault();

    if (
      maskTel.masked.isComplete &&
      formName.value.length > 3 &&
      formCheckbox.checked
    ) {
      formTel.value = "";
      formName.value = "";
      formCheckbox.checked = false;
    }
  });

  //Smart-line-pc
  const trigger = document.getElementById("trigger");
  const item = document.getElementById("item");
  const trigger2 = document.getElementById("trigger2");
  const item2 = document.getElementById("item2");

  if (trigger) {
    trigger.addEventListener("mouseenter", function () {
      item.classList.remove("no-animation");
      item.classList.add("flipped");
    });
    trigger.addEventListener("mouseleave", function () {
      item.classList.remove("flipped");
    });
  }

  if (trigger2) {
    trigger2.addEventListener("mouseenter", function () {
      item2.classList.remove("no-animation");
      item2.classList.add("flipped");
    });
    trigger2.addEventListener("mouseleave", function () {
      item2.classList.remove("flipped");
    });
  }
  //More-Less
  const parentAspects = document.getElementById("parent__aspects");
  const moreAspects = document.getElementById("more__aspects");
  const lessAspects = document.getElementById("less__aspects");
  const parentAspects2 = document.getElementById("parent__aspects2");
  const moreAspects2 = document.getElementById("more__aspects2");
  const lessAspects2 = document.getElementById("less__aspects2");

  moreAspects.addEventListener("click", function (e) {
    e.preventDefault();
    parentAspects.classList.toggle("more");
    parentAspects.classList.toggle("less");

    moreAspects.classList.toggle("none");

    lessAspects.classList.toggle("none");
  });

  lessAspects.addEventListener("click", function (e) {
    e.preventDefault();
    parentAspects.classList.toggle("more");
    parentAspects.classList.toggle("less");

    moreAspects.classList.toggle("none");

    lessAspects.classList.toggle("none");
  });

  moreAspects2.addEventListener("click", function (e) {
    e.preventDefault();
    parentAspects2.classList.toggle("more");
    parentAspects2.classList.toggle("less");

    moreAspects2.classList.toggle("none");

    lessAspects2.classList.toggle("none");
  });

  lessAspects2.addEventListener("click", function (e) {
    e.preventDefault();
    parentAspects2.classList.toggle("more");
    parentAspects2.classList.toggle("less");

    moreAspects2.classList.toggle("none");

    lessAspects2.classList.toggle("none");
  });
});

//Scroller

$(".whatNeed__items").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  ],
});

$(".whatNeed__items2").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".clients__row").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 410,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});
$(".clients__row1").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 410,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});
$(".promo__slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});
$(".portfolio__scroll").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 410,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});
$(".content__works_row").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});
//Burger
const navInput = document.getElementById("nav__input");
const navLinks = document.getElementById("nav__links");

navInput.addEventListener("focus", function () {
  navLinks.classList.add("none");
});
navInput.addEventListener("blur", function () {
  navLinks.classList.remove("none");
});

const burger = document.getElementById("burger");
const burgerOpen = document.getElementById("burger-open");
const burgerClose = document.getElementById("burger-close");

burgerOpen.addEventListener("click", function () {
  burger.classList.add("open");
});
burgerClose.addEventListener("click", function () {
  burger.classList.remove("open");
});
