document.querySelector("clickMe").addEventListener("click", getData);

async function getData() {
  const cardName = document.querySelector("#cardName").value;
  const res = await fetch(`/api?card=${cardName}`);
  const data = await res.json();

  console.log(data);
  document.querySelector("#cardName").textContent = data.name;
  document.querySelector("#creatureType").textContent = data.type;
  document.querySelector("#flavorText").textContent = data.flavorText;
}
