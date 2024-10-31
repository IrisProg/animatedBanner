let items = document.querySelectorAll(".products__item");
let topWrapper = document.querySelector(".products");
let bottomWrapper = document.querySelector(".basket");

document.querySelector(".button").style.display = "none";

items.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    let selected = e.target;

    bottomWrapper.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    bottomWrapper.addEventListener("drop", (e) => {
      if (Number(selected) >= 0)
        document.querySelector(".button").style.display = "block";
      bottomWrapper.appendChild(selected);

      selected = null;
    });
  });
});
