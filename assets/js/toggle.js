document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".paper-card").forEach(function (card) {
        let abstractButton = card.querySelector(".toggle-abstract");
        let bibtexButton = card.querySelector(".toggle-bibtex");
        let abstractContent = card.querySelector(".abstract-content");
        let bibtexContent = card.querySelector(".bibtex-content");

        abstractButton.addEventListener("click", function () {
            bibtexContent.classList.add("hidden");
            abstractContent.classList.toggle("hidden");
        });

        bibtexButton.addEventListener("click", function () {
            abstractContent.classList.add("hidden");
            bibtexContent.classList.toggle("hidden");
        });
    });
});
