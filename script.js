// SPREMEMBA BESEDILA
document.getElementById("btnText").addEventListener("click", function () {
  document.getElementById("opis").textContent =
    "Besedilo je bilo uspešno spremenjeno!";
});

// ŠTEVEC
let count = 0;
document.getElementById("btnCounter").addEventListener("click", function () {
  count++;
  document.getElementById("counter").textContent = count;
});

// ČAS
function updateTime() {
  const now = new Date();
  document.getElementById("time").textContent =
    now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

// DARK MODE
document.getElementById("toggleTheme").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// ALERT
document.getElementById("alertBtn").addEventListener("click", function () {
  alert("To je testno sporočilo!");
});