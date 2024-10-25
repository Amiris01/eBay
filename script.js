function toggleDropdown() {
  document.getElementById("dropdown-menu").classList.toggle("show");
}

window.onclick = function (event) {
  if (
    !event.target.matches(".shop-category span") &&
    !event.target.matches(".dropdown-icon")
  ) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var dropdown = document.querySelector(".dropdown");

  dropdown.addEventListener("click", function (event) {
    event.stopPropagation();
    this.classList.toggle("show");
  });

  window.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown")) {
      dropdown.classList.remove("show");
    }
  });

  function changeStyle() {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const activeIndex = Array.from(carouselItems).findIndex((item) =>
      item.classList.contains("active")
    );
    const colors = ["#500750", "#c5e5fb", "#ffffff", "#fbcd25"];
    const bgcolors = ["#fad8f0", "#500750", "#a60d8a", "#121258"];
    const colorSchemes = [
      "color-scheme-0",
      "color-scheme-1",
      "color-scheme-2",
      "color-scheme-3",
    ];

    const carouselElement = document.querySelector(".carousel");
    colorSchemes.forEach((scheme) => {
      carouselElement.classList.remove(scheme);
    });

    if (activeIndex >= 0 && activeIndex < colorSchemes.length) {
      const activeScheme = colorSchemes[activeIndex];
      carouselElement.classList.add(activeScheme);
    }

    document.querySelectorAll(".carousel-section").forEach((section) => {
      section.style.color = "";
      section.style.backgroundColor = "";
    });

    document.querySelectorAll(".shop-now1").forEach((button) => {
      button.style.color = "";
      button.style.border = "";
      button.style.backgroundColor = "";
    });

    if (activeIndex >= 0 && activeIndex < colors.length) {
      const activeCarouselSection =
        carouselItems[activeIndex].querySelector(".carousel-section");
      const activeButtons =
        carouselItems[activeIndex].querySelectorAll(".shop-now1");
      if (activeCarouselSection) {
        activeCarouselSection.style.color = colors[activeIndex];
        activeCarouselSection.style.backgroundColor = bgcolors[activeIndex];
      }
      activeButtons.forEach((button) => {
        const textColor = colors[activeIndex];
        const bgColor = bgcolors[activeIndex];
        button.style.color = textColor;
        button.style.border = `1px solid ${textColor}`;
        button.style.backgroundColor = bgColor;

        button.addEventListener("mouseover", function () {
          button.style.color = bgColor;
          button.style.backgroundColor = textColor;
        });

        button.addEventListener("mouseout", function () {
          button.style.color = textColor;
          button.style.backgroundColor = bgColor;
        });
      });
    }
  }

  const carouselElement = document.querySelector(".carousel");
  if (carouselElement) {
    carouselElement.addEventListener("slid.bs.carousel", changeStyle);
  }
});

function toggleNotificationMenu() {
  var menu = document.querySelector(".notification-menu");
  menu.classList.toggle("show");
}

window.addEventListener("click", function (event) {
  if (!event.target.closest(".notification")) {
    var menus = document.querySelectorAll(".notification-menu");
    menus.forEach(function (menu) {
      menu.classList.remove("show");
    });
  }
});

function toggleCountryMenu(event) {
  event.stopPropagation();
  const dropdownMenu = document.getElementById("dropdown-menu2");
  dropdownMenu.classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.closest(".position-relative")) {
    const dropdowns = document.getElementsByClassName("dropdown-menu2");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

document
  .querySelector(".electronics-hover")
  .addEventListener("mouseover", function () {
    document.querySelector(".box-style").style.display = "block";
  });

document
  .querySelector(".electronics-hover")
  .addEventListener("mouseout", function () {
    document.querySelector(".box-style").style.display = "none";
  });

document.querySelector(".box-style").addEventListener("mouseover", function () {
  this.style.display = "block";
});

document.querySelector(".box-style").addEventListener("mouseout", function () {
  this.style.display = "none";
});

document
  .querySelector(".fashion-hover")
  .addEventListener("mouseover", function () {
    document.querySelector(".box-style2").style.display = "block";
  });

document
  .querySelector(".fashion-hover")
  .addEventListener("mouseout", function () {
    document.querySelector(".box-style2").style.display = "none";
  });

document
  .querySelector(".box-style2")
  .addEventListener("mouseover", function () {
    this.style.display = "block";
  });

document.querySelector(".box-style2").addEventListener("mouseout", function () {
  this.style.display = "none";
});

document.querySelector(".box-style2").addEventListener("mouseout", function () {
  this.style.display = "none";
});

document
  .querySelector(".computer-hover")
  .addEventListener("mouseover", function () {
    document.querySelector(".box-style3").style.display = "block";
  });

document
  .querySelector(".computer-hover")
  .addEventListener("mouseout", function () {
    document.querySelector(".box-style3").style.display = "none";
  });

document
  .querySelector(".box-style3")
  .addEventListener("mouseover", function () {
    this.style.display = "block";
  });

document.querySelector(".box-style3").addEventListener("mouseout", function () {
  this.style.display = "none";
});

document
  .querySelector(".jewellery-hover")
  .addEventListener("mouseover", function () {
    document.querySelector(".box-style4").style.display = "block";
  });

document
  .querySelector(".jewellery-hover")
  .addEventListener("mouseout", function () {
    document.querySelector(".box-style4").style.display = "none";
  });

document
  .querySelector(".box-style4")
  .addEventListener("mouseover", function () {
    this.style.display = "block";
  });

document.querySelector(".box-style4").addEventListener("mouseout", function () {
  this.style.display = "none";
});

document
  .querySelector(".beauty-hover")
  .addEventListener("mouseover", function () {
    document.querySelector(".box-style5").style.display = "block";
  });

document
  .querySelector(".beauty-hover")
  .addEventListener("mouseout", function () {
    document.querySelector(".box-style5").style.display = "none";
  });

document
  .querySelector(".box-style5")
  .addEventListener("mouseover", function () {
    this.style.display = "block";
  });

document.querySelector(".box-style5").addEventListener("mouseout", function () {
  this.style.display = "none";
});

document
  .querySelector(".toys-hover")
  .addEventListener("mouseover", function () {
    document.querySelector(".box-style6").style.display = "block";
  });

document.querySelector(".toys-hover").addEventListener("mouseout", function () {
  document.querySelector(".box-style6").style.display = "none";
});

document
  .querySelector(".box-style6")
  .addEventListener("mouseover", function () {
    this.style.display = "block";
  });

document.querySelector(".box-style6").addEventListener("mouseout", function () {
  this.style.display = "none";
});

document
  .querySelector(".collectables-hover")
  .addEventListener("mouseover", function () {
    document.querySelector(".box-style7").style.display = "block";
  });

document
  .querySelector(".collectables-hover")
  .addEventListener("mouseout", function () {
    document.querySelector(".box-style7").style.display = "none";
  });

document
  .querySelector(".box-style7")
  .addEventListener("mouseover", function () {
    this.style.display = "block";
  });

document.querySelector(".box-style7").addEventListener("mouseout", function () {
  this.style.display = "none";
});

document
  .querySelector(".home-hover")
  .addEventListener("mouseover", function () {
    document.querySelector(".box-style8").style.display = "block";
  });

document.querySelector(".home-hover").addEventListener("mouseout", function () {
  document.querySelector(".box-style8").style.display = "none";
});

document
  .querySelector(".box-style8")
  .addEventListener("mouseover", function () {
    this.style.display = "block";
  });

document.querySelector(".box-style8").addEventListener("mouseout", function () {
  this.style.display = "none";
});
