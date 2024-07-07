const Elinput1 = document.querySelector("#input1");
const Elinput2 = document.querySelector("#input2");
const Elinput3 = document.querySelector("#input3");
const Elbtn = document.querySelector("#btn1");
const Elresult = document.querySelector("#result");

Elbtn.addEventListener("click", function () {
  const newCard = document.createElement("div");
  const newTitle = document.createElement("h4");
  const newParaghraph = document.createElement("p");
  const newNumber = document.createElement("p");

  newCard.className = "contact";
  newTitle.textContent = Elinput1.value;
  newParaghraph.textContent = Elinput2.value;
  newNumber.textContent = Number(Elinput3.value);
  newCard.appendChild(newTitle);
  newCard.appendChild(newParaghraph);
  newCard.appendChild(newNumber);
  Elresult.appendChild(newCard);

  newNumber.style.color = "blue";
});

const loading = document.getElementById("loading");
window.addEventListener("load", () => {
  loading.classList.add("loading-none");
});
