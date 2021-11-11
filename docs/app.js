const button = document.getElementsByClassName("themeSwitch__button")[0];

button.addEventListener('click', () => {
    let currentBodyClass = document.body.classList;
    let currentCardClass = document.getElementsByClassName("card")[0].classList;
    let currentCardPlateClass = document.getElementsByClassName("card-plate")[0].classList;
    let currentCardDownloadButtonClass = document.getElementsByClassName("card-info__download")[0].classList;

    if (currentBodyClass.contains("body_light")) {
        currentBodyClass.replace("body_light", "body_dark");
        currentCardClass.replace("card_light", "card_dark");
        currentCardPlateClass.replace("card-plate_light", "card-plate_dark");
        currentCardDownloadButtonClass.replace("card-info__download_light", "card-info__download_dark");
    } else if (currentBodyClass.contains("body_dark")) {
        currentBodyClass.replace("body_dark", "body_light");
        currentCardClass.replace("card_dark", "card_light");
        currentCardPlateClass.replace("card-plate_dark", "card-plate_light");
        currentCardDownloadButtonClass.replace("card-info__download_dark", "card-info__download_light");
    }
});
