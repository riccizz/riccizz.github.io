document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".paper-card").forEach(function (card) {
    const abstractButton  = card.querySelector(".toggle-abstract");
    const bibtexButton    = card.querySelector(".toggle-bibtex");
    const abstractContent = card.querySelector(".abstract-content");
    const bibtexContent   = card.querySelector(".bibtex-content");

    if (abstractButton && abstractContent) {
      abstractButton.addEventListener("click", function () {
        if (bibtexContent) bibtexContent.classList.add("hidden");
        abstractContent.classList.toggle("hidden");
      });
    }

    if (bibtexButton && bibtexContent) {
      bibtexButton.addEventListener("click", function () {
        if (abstractContent) abstractContent.classList.add("hidden");
        bibtexContent.classList.toggle("hidden");
      });
    }
  });
});
