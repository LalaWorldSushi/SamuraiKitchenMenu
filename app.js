const state = { lang: localStorage.getItem("samurai-language") || "it" };

function translatePage() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-it][data-en]").forEach((node) => {
    node.textContent = node.dataset[state.lang];
  });
  document.querySelector("#languageLabel").textContent = state.lang === "it" ? "EN" : "IT";
}

document.querySelector("#languageButton").addEventListener("click", () => {
  state.lang = state.lang === "it" ? "en" : "it";
  localStorage.setItem("samurai-language", state.lang);
  translatePage();
});

translatePage();
