const allBtn = document.querySelector("#all");
const koreaBtn = document.querySelector("#korea");
const japanBtn = document.querySelector("#japan");
const chinaBtn = document.querySelector("#china");
const sectionCenter = document.querySelector(".section-center");

function createListElement(data) {
  const { title, price, img, desc } = data;
  //element creation
  const menuItemDiv = document.createElement("div");
  menuItemDiv.setAttribute("class", "menu-items col-lg-6 col-sm-12");
  const image = document.createElement("img");
  image.setAttribute("src", img);
  image.setAttribute("alt", title);
  image.setAttribute("class", "photo");
  const menuInfoDiv = document.createElement("div");
  menuInfoDiv.setAttribute("class", "menu-info");
  const menuTitleDiv = document.createElement("div");
  const titleHeader = document.createElement("h4");
  titleHeader.textContent = title;
  const priceHeader = document.createElement("h4");
  priceHeader.setAttribute("class", "price");
  priceHeader.textContent = price;
  const menuTextDiv = document.createElement("div");
  menuTextDiv.setAttribute("class", "menu-text");
  menuTextDiv.textContent = desc;

  //append elements
  menuTitleDiv.appendChild(titleHeader);
  menuTitleDiv.appendChild(priceHeader);
  menuInfoDiv.appendChild(menuTitleDiv);
  menuInfoDiv.appendChild(menuTextDiv);
  menuItemDiv.appendChild(image);
  menuItemDiv.appendChild(menuInfoDiv);
  sectionCenter.appendChild(menuItemDiv);
}

function clearSectionCenter() {
  while (sectionCenter.firstChild) {
    sectionCenter.removeChild(sectionCenter.firstChild);
  }
}

function fetchFoods(nation) {
  clearSectionCenter();
  const categorizedFoods = menu.filter(food => food.category === nation);
  categorizedFoods.forEach(food => createListElement(food));
}

allBtn.addEventListener("click", e => {
  clearSectionCenter();
  menu.forEach(data => {
    createListElement(data);
  });
});

koreaBtn.addEventListener("click", e => {
  fetchFoods(e.target.textContent.trim());
});

japanBtn.addEventListener("click", e => {
  fetchFoods(e.target.textContent.trim());
});

chinaBtn.addEventListener("click", e => {
  fetchFoods(e.target.textContent.trim());
});

allBtn.click();
