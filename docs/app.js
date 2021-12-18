document.addEventListener("DOMContentLoaded", function (event) {
    const button = document.getElementsByClassName("themeSwitch__button")[0];

    button.addEventListener('click', () => {
        let currentBodyClass = document.body.classList;
        let currentCardClass = document.querySelector(".card").classList;
        let currentCardPlateClass = document.querySelector(".card-plate").classList;
        let currentCardDownloadButtonClass = document.querySelector(".card-info__download").classList;

        currentBodyClass.toggle("body_dark");
        currentCardClass.toggle("card_dark");
        currentCardPlateClass.toggle("card-plate_dark");
        currentCardDownloadButtonClass.toggle("card-info__download_dark");
    });
});
