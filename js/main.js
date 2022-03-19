$(function () {
  /*Banner carousel*/
  $(".banner-carousel").owlCarousel({
    loop: false,
    margin: 0,
    dots: false,
    responsiveClass: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      750: {
        items: 2,
      },
      1020: {
        items: 3,
        nav: false,
        loop: false,
      },
    },
  });
  /** Discover Carousel **/
  $(".discover-carousel").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      3000: {
        items: 1,
      },
    },
  });
  /**Testimonial Carousel**/
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  /** Brands Carousel**/
  $(".brands-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      998: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });

  /* Scroll */
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 30) {
      $(".header").addClass("fixed-header");
    } else {
      $(".header").removeClass("fixed-header");
    }
  });
  /*Search-panel*/
  $(".search-icon").on("click", () => {
    document.body.style.overflow = "hidden";
    $(".search-content").addClass("open");
    $(".search-inner").addClass("show");
  });
  $(".close-search-icon").on("click", () => {
    $(".search-content").removeClass("open");
    $(".search-inner").removeClass("show");
  });
  /*Account-panel*/
  $(".account-icon").on("click", () => {
    document.body.style.overflow = "hidden";
    $(".account-content").addClass("open");
    $(".account-inner").addClass("show");
  });
  $(".close-account-icon").on("click", () => {
    $(".account-content").removeClass("open");
    $(".account-inner").removeClass("show");
  });

  /*navbar*/
  $(".menu-bars").on("click", () => {
    $(".nav-mobile").addClass("open");
    $(".nav-mobile-content").addClass("open");
    document.body.style.overflow = "hidden";
  });
  $(".close-icon").on("click", () => {
    $(".nav-mobile").removeClass("open");
    $(".nav-mobile-content").removeClass("open");
  });
});
/*products*/
const product = document.querySelector(".product");
const articles = document.querySelectorAll(".content");
const btns = document.querySelectorAll(".tab-btn");
product.addEventListener("click", (e) => {
  let id = e.target.dataset.id;
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
/*discover discount*/
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const discounts = document.querySelectorAll(".discount");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempDay = tempDate.getDate();
let tempMonth = tempDate.getMonth();
let futurDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const year = futurDate.getFullYear();
const date = futurDate.getDate();
const hours = futurDate.getHours();
const min = futurDate.getMinutes();
let month = futurDate.getMonth();
month = months[month];
let weekday = futurDate.getDay();
weekday = weekdays[weekday];
const futurTime = futurDate.getTime();
function getRmaindingTime() {
  const today = new Date().getTime();
  const t = futurTime - today;
}
discounts.forEach((discount) => {
  discount.innerHTML = `End ${weekday}, ${date} ${month} ${year} ${hours}:${min}am`;
});
// show cart ---------close cart
const cartBtn = document.querySelectorAll(".cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector(".close-cart-btn");
const cartContainer = document.querySelector(".cart-container");
cartBtn.forEach((btn)=>{
  btn.addEventListener("click", () => {
    cartContainer.classList.add("show");
    document.body.style.overflow = "hidden";
  });
})

closeCart.addEventListener("click", () => {
  cartContainer.classList.remove("show");
  document.body.style.overflow = "scroll";
});
//add to cart
const cartBtns = document.querySelectorAll(".card-btn");


cartBtns.forEach((cartBtn) => {
  cartBtn.addEventListener("click", (event) => {
    if (event.target.parentElement.classList.contains("card-btn")) {
      const cartInfo = document.querySelector(".info");
      cartInfo.classList.add("none");
      const cartTotalContainer=document.querySelector(".cart-total-container");
      cartTotalContainer.classList.add('show');
      let itemImg =
        event.target.parentElement.parentElement.previousElementSibling.src;
      const item = {};
      item.img = itemImg;
      console.log(item);
      let name =
        event.target.parentElement.parentElement.parentElement.children[0]
          .children[0].children[0].textContent;
      item.name = name;
      let price =
        event.target.parentElement.parentElement.parentElement.children[0]
          .children[2].textContent;

      let finalPrice = price.slice(1).trim();
      item.price = finalPrice;
      console.log(item);
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item", "d-flex");
      cartItem.innerHTML = `
            <img src=${item.img} class="img" id="item-img" alt="img">
            <div class="cart-item-text">
            <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
            <span>$</span>
            <span id="cart-item-price" class="cart-item-price mb-0">${item.price}</span>
          </div>`;

      //select cart
      const cartBody = document.querySelector(".cart-body");
      cartBody.style.overflow='scroll'
      cartBody.appendChild(cartItem);
      showTotals();
    }
  });
});
const showTotals = () => {
  const total = [];
  const items = document.querySelectorAll(".cart-item-price");
  items.forEach((item) => {
    total.push(parseFloat(item.textContent));
  });
  const totalMoney = total.reduce((total, item) => {
    total += item;
    return total;
  }, 0);
  const finalMoney = totalMoney.toFixed(2);
  document.querySelector(".cart-total").textContent = finalMoney;
  document.querySelector(".count").innerHTML = total.length;
 const cartCount= document.querySelectorAll(".cart-count")
cartCount.forEach((count)=>{
count.innerHTML = total.length;
})
};
