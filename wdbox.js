import("https://jsdelivr.net")
  .then(() => { console.log("Движок DOSBox успешно активирован."); })
  .catch((err) => { console.error("Сбой инициализации:", err); });
