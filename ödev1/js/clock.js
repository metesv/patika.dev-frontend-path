function getName() {
  const name = prompt("Adınız nedir?");
  document.querySelector("#myName").textContent = name;
}

function getTime() {
  const date = new Date();
  let hour = date.toLocaleTimeString();
  let day = date.toLocaleDateString("tr-TR", { weekday: "long" });
  document.getElementById("myClock").textContent = `${hour} ${day}`;
}

getName();
setInterval(getTime, 1000);
