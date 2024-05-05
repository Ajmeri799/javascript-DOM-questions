// Question 1

document.querySelector(
  ".side-bar .crayons-card .crayons-subtitle-2"
).textContent = "Vivek";
document.querySelector(".side-bar .crayons-card .color-base-70").textContent =
  "I Wtite Code";

// Question 18
let abc = document.querySelector("footer .p-footer div");
console.log(abc);
abc.style.backgroundColor = "orange";

// Question 20
const res = document.querySelector(
  ".homepage-featured-product-container-left div p"
);
res.style.color = "orange";

// -----
const res = document.querySelectorAll(
  ".homepage-featured-product-container-left "
);
console.log(res[1]);
const ele = res[1];
console.log(ele);
const p_cont = ele.querySelector(
  ".homepage-featured-product-container-left div p"
);
p_cont.style.color = "orange";

// ----------------------next-------------------------

// Question 19

const imgs = document.querySelector(".navbar-brand");
const img = document.querySelector(".navbar-brand .logo");
const img_link = img.src;
console.log(img_link);
imgs.innerHTML = img_link;

//  Question 17
const imgs = document.querySelector(".GalleryListItem__BuyButtonContainer");
console.log(imgs);
const b_date = new Date();
console.log(b_date);
imgs.innerHTML = b_date;
console.log(imgs);

// Question 15

const text = document.querySelector(".ps-title");
text.style.textAlign = "right";

// Question 14

const head = document.querySelector(".HotDealsAll__Heading__2fIbe");
console.log(head);
head.style.fontSize = "80px";

// Question 12
const head = document.querySelector(
  ".Box-sc-g0xbh4-0 .aBKvw .types__StyledButton-sc-ws60qy-0 "
);
head.style.backgroundColor = "blue";

// Question 8

const google_lang = document.querySelectorAll(".vcVZ7d #SIvCob a");
let val = google_lang.forEach(function (element, index) {
  if (index % 2 === 0) {
    element.remove();
  }
});

//Question 3

const new_ele = document.createElement("section");
new_ele.className = "parent";
const new_h3 = document.createElement("h3");
const data = document.createTextNode("My New FAQ");
console.log(data);
new_ele.appendChild(new_h3);
console.log(new_ele);
new_h3.appendChild(data);
document.querySelector(".accordion-homepage").appendChild(new_ele);
// ----------------------------
const name = document.getElementsByClassName("accordion-homepage");
for (var i = 0; i < name.length; i++) {
  name[i].appendChild(new_ele);
}

//Question 2
// const data=document.querySelectorAll(".globalnav-menu-list .globalnav-item-submenu .globalnav-link-text")
const datas = document.querySelectorAll(".globalnav-link-text");
let data_list = datas.forEach(function (item) {
  console.log(item.textContent);
});
//
let node = document.getElementsByClassName("globalnav-link-text");
Array.from(node);
