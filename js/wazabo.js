// bloque la navigation tant que la page n'est pas validée
document.addEventListener("DOMContentLoaded", () => {
  const validateBtn = document.querySelector(".validate");
  if (validateBtn) {
    validateBtn.addEventListener("click", () => {
      const next = validateBtn.dataset.next;
      localStorage.setItem(next, "unlocked");
      window.location.href = next;
    });
  }

  document.querySelectorAll("nav a[data-lock='true']").forEach(link => {
    const page = link.getAttribute("href");
    if (localStorage.getItem(page) !== "unlocked") {
      link.classList.add("locked");
      link.addEventListener("click", e => {
        e.preventDefault();
        alert("Suite !");
      });
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const wazabo = document.getElementById("wazabo");
  wazabo.textContent = "🎲 Wazabi : clique pour t’amuser !";
  wazabo.style.cursor = "pointer";

  const emojis = [
    "🚀","🐱","🎉","🔥","🌍","💡","🦄","📱","🐶","🐵","🦊","🐸","🐼","🦁",
    "🐯","🐷","🐔","🐧","🐢","🐙","🐠","🌸","🌞","🌛","⭐","⚡","🌈","🍎","🍕",
    "🍔","🍟","🍩","🍪","🍫","🎂","🍿","🥑","🥦","🌽","🍇","🍉","🍓","🍒","🍋",
    "🎈","🎁","🎵","🎶","🎤","🎧","🎮"
  ];

  wazabo.addEventListener("click", () => {
    let count = 0;
    const maxRolls = 10;
    const intervalTime = 80; // ms entre chaque emoji

    const rollInterval = setInterval(() => {
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      wazabo.textContent = `Wazabi : ${randomEmoji}`;
      count++;
      if (count >= maxRolls) {
        clearInterval(rollInterval);
        // Afficher le résultat final
        const finalEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        wazabo.textContent = `Wazabi : ${finalEmoji}`;
      }
    }, intervalTime);
  });
});
